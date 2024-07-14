/// Rust implementation of MurmurHash2
///
/// Based on the original implementation by Austin Appleby
/// and the JavaScript port by Gary Court
///
/// This function takes an ASCII string and returns a base36 encoded hash result
///
/// In furture we should probably switch to use std::hash::{DefaultHasher, Hasher};
/// But for now we want the same hash result as the JavaScript version
pub fn murmurhash2_32_gc(str: &str) -> String {
  let mut h: u32 = str.len() as u32;
  let mut k: u32;

  let bytes = str.as_bytes();
  let mut i = 0;

  while i + 4 <= bytes.len() {
    k = u32::from_le_bytes([bytes[i], bytes[i + 1], bytes[i + 2], bytes[i + 3]]);

    k = k.wrapping_mul(0x5bd1e995);
    k ^= k >> 24;
    k = k.wrapping_mul(0x5bd1e995);

    h = h.wrapping_mul(0x5bd1e995) ^ k;

    i += 4;
  }

  // Handle the last few bytes
  match bytes.len() - i {
    3 => {
      h ^= (bytes[i + 2] as u32) << 16;
      h ^= (bytes[i + 1] as u32) << 8;
      h ^= bytes[i] as u32;
      h = h.wrapping_mul(0x5bd1e995);
    }
    2 => {
      h ^= (bytes[i + 1] as u32) << 8;
      h ^= bytes[i] as u32;
      h = h.wrapping_mul(0x5bd1e995);
    }
    1 => {
      h ^= bytes[i] as u32;
      h = h.wrapping_mul(0x5bd1e995);
    }
    _ => {}
  }

  h ^= h >> 13;
  h = h.wrapping_mul(0x5bd1e995);
  h ^= h >> 15;

  // Convert directly to base36
  to_base36(h)
}

// Helper function to convert u32 to base36
fn to_base36(mut num: u32) -> String {
  const DIGITS: &[u8] = b"0123456789abcdefghijklmnopqrstuvwxyz";
  let mut result = Vec::new();

  if num == 0 {
    return "000000".to_string();
  }

  while num > 0 {
    result.push(DIGITS[(num % 36) as usize]);
    num /= 36;
  }

  result.reverse();
  String::from_utf8(result).unwrap_or_else(|_| "000000".to_string())
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_empty_string() {
    assert_eq!(murmurhash2_32_gc(""), "000000");
  }

  #[test]
  fn test_short_string() {
    assert_eq!(murmurhash2_32_gc("special/path/page.tsx"), "18fi82j");
  }

  #[test]
  fn test_medium_string() {
    assert_eq!(murmurhash2_32_gc("hello"), "1rn7hzf");
  }

  #[test]
  fn test_long_string() {
    assert_eq!(
      murmurhash2_32_gc("The quick brown fox jumps over the lazy dog"),
      "975m1c"
    );
  }

  #[test]
  fn test_different_strings_produce_different_hashes() {
    let hash1 = murmurhash2_32_gc("hello");
    let hash2 = murmurhash2_32_gc("world");
    assert_ne!(hash1, hash2);
  }

  #[test]
  fn test_consistent_hashing() {
    let hash1 = murmurhash2_32_gc("test string");
    let hash2 = murmurhash2_32_gc("test string");
    assert_eq!(hash1, hash2);
  }

  #[test]
  fn test_hash_length() {
    let hash = murmurhash2_32_gc("any string");
    assert_eq!(hash.len(), 6);
  }

  #[test]
  fn test_hash_is_base36() {
    let hash = murmurhash2_32_gc("base36 test");
    assert!(hash.chars().all(|c| c.is_digit(36)));
  }
}
