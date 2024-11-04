use std::hash::{DefaultHasher, Hash, Hasher};

/// Creates a CSS-compatible identifier using Rust's DefaultHasher (SipHash-1-3)
///
/// Takes an ASCII string and returns a base62 encoded hash result
/// that is a valid CSS identifier starting with a letter
pub fn hash_to_css(input: &str) -> String {
  let mut hasher = DefaultHasher::new();
  input.hash(&mut hasher);
  let hash = hasher.finish();

  // Convert to u32 to maintain similar output length as original
  to_css_identifier(hash)
}

// Helper function to convert u32 to a valid CSS identifier
fn to_css_identifier(mut num: u64) -> String {
  const DIGITS: &[u8] = b"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
  let mut result = Vec::new();

  if num == 0 {
    return "a00000".to_string();
  }

  // CSS Identifiers must start with a letter
  result.push(DIGITS[(num % 52) as usize]);
  num /= 52;

  while num > 0 {
    result.push(DIGITS[(num % 62) as usize]);
    num /= 62;
    if result.len() == 6 {
      break;
    }
  }

  String::from_utf8(result).unwrap_or_else(|_| "a00000".to_string())
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_empty_string() {
    assert_eq!(hash_to_css(""), "hQ4kcJ");
  }

  #[test]
  fn test_short_string() {
    assert_eq!(hash_to_css("special/path/page.tsx"), "Uy8NrL");
  }

  #[test]
  fn test_medium_string() {
    assert_eq!(hash_to_css("hello"), "H6oyDl");
  }

  #[test]
  fn test_long_string() {
    assert_eq!(
      hash_to_css("The quick brown fox jumps over the lazy dog"),
      "zqke8J"
    );
  }

  #[test]
  fn test_different_strings_produce_different_hashes() {
    let hash1 = hash_to_css("hello");
    let hash2 = hash_to_css("world");
    assert_ne!(hash1, hash2);
  }

  #[test]
  fn test_consistent_hashing() {
    let hash1 = hash_to_css("test string");
    let hash2 = hash_to_css("test string");
    assert_eq!(hash1, hash2);
  }

  #[test]
  fn test_hash_length() {
    let hash = hash_to_css("any string");
    assert_eq!(hash.len(), 6);
  }

  #[test]
  fn test_hash_is_base36() {
    let hash = hash_to_css("base36 test");
    assert!(hash.chars().all(|c| c.is_digit(36)));
  }
}
