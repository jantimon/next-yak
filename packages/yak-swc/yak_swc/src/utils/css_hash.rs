/// Implementation of the FNV-1a (Fowler-Noll-Vo) hash algorithm for CSS identifiers
/// This is a non-cryptographic hash function that is:
/// - Fast and simple
/// - Deterministic across platforms
/// - Good distribution for short strings
const FNV_PRIME: u64 = 1099511628211;
const FNV_OFFSET_BASIS: u64 = 14695981039346656037;

/// Creates a CSS-compatible identifier using FNV-1a hash
/// Returns a base62 encoded hash result that is a valid CSS identifier
pub fn hash_to_css(input: &str) -> String {
  let hash = fnv1a_64(input);
  to_css_identifier(hash)
}

/// FNV-1a 64-bit hash implementation
fn fnv1a_64(input: &str) -> u64 {
  let mut hash = FNV_OFFSET_BASIS;
  for byte in input.bytes() {
    hash ^= u64::from(byte);
    hash = hash.wrapping_mul(FNV_PRIME);
  }
  hash
}

// Helper function to convert u64 to a valid CSS identifier
fn to_css_identifier(mut num: u64) -> String {
  // CSS Identifiers must start with a letter
  const FIRST_LETTER_DIGITS: &[u8] = b"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let first_letter_count = FIRST_LETTER_DIGITS.len() as u64;
  // CSS Identifiers can contain letters, digits, hyphens, and underscores
  // but we only use letters and digits for better readability for now
  const DIGITS: &[u8] = b"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let digit_count = DIGITS.len() as u64;

  let mut result = Vec::with_capacity(6);

  if num == 0 {
    return "a00000".to_string();
  }

  result.push(DIGITS[(num % first_letter_count) as usize]);
  num /= first_letter_count;

  while num > 0 {
    result.push(DIGITS[(num % digit_count) as usize]);
    num /= digit_count;
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
    assert_eq!(hash_to_css(""), "brmrUI");
  }

  #[test]
  fn test_short_string() {
    assert_eq!(hash_to_css("special/path/page.tsx"), "TzYwQZ");
  }

  #[test]
  fn test_medium_string() {
    assert_eq!(hash_to_css("hello"), "RMT3qV");
  }

  #[test]
  fn test_long_string() {
    assert_eq!(
      hash_to_css("The quick brown fox jumps over the lazy dog"),
      "OkGoM1"
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
  fn test_hash_starts_with_letter() {
    for i in 0..100 {
      let hash = hash_to_css(&i.to_string());
      assert!(hash.chars().next().unwrap().is_alphabetic());
    }
  }

  #[test]
  fn test_hash_contains_only_valid_chars() {
    const VALID_CHARS: &str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
    for i in 0..100 {
      let hash = hash_to_css(&i.to_string());
      assert!(hash.chars().all(|c| VALID_CHARS.contains(c)));
    }
  }
}
