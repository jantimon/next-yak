use lazy_static::lazy_static;
use regex::Regex;

fn main() {
  // These are a quick and dirty replacement for tests just to be sure
  assert_eq!(true, ends_with_impl("file.yak.ts"));
  assert_eq!(false, ends_with_impl("file.yak"));
  assert_eq!(false, ends_with_impl("file.yak.tsx.nope"));

  assert_eq!(true, regex_impl("file.yak.ts"));
  assert_eq!(false, regex_impl("file.yak"));
  assert_eq!(false, regex_impl("file.yak.tsx.nope"));

  assert_eq!(true, last_chars_impl("file.yak.ts"));
  assert_eq!(false, last_chars_impl("file.yak"));
  assert_eq!(false, last_chars_impl("file.yak.tsx.nope"));
  assert_eq!(true, last_chars_impl("file.yak.tsx"));

  assert_eq!(true, last_chars_impl_macro("file.yak.ts"));
  assert_eq!(false, last_chars_impl_macro("file.yak"));
  assert_eq!(false, last_chars_impl_macro("file.yak.tsx.nope"));
  assert_eq!(true, last_chars_impl_macro("file.yak.tsx"));

  // and that's the actual benchmark
  divan::main();
}

const FILENAMES: [&str; 8] = [
  "short_filename.yak.ts",
  "short_filename.yak.tsx",
  "short_filename.yak.js",
  "short_filename.yak.jsx",
  "short_filename.yak.mjs",
  "short_filename.ts",
  "/a/very/long/path/with/many/segments/long_filename.yak.ts",
  "/another/very/long/path/with/many/segments/long_filename.mjs",
];

#[divan::bench(min_time = 10)]
fn ends_with() {
  for filename in FILENAMES {
    ends_with_impl(filename);
  }
}

#[divan::bench(min_time = 10)]
fn regex() {
  for filename in FILENAMES {
    regex_impl(filename);
  }
}

#[divan::bench(min_time = 10)]
fn last_8_chars() {
  for filename in FILENAMES {
    last_chars_impl(filename);
  }
}

#[divan::bench(min_time = 10)]
fn last_8_chars_macro() {
  for filename in FILENAMES {
    last_chars_impl_macro(filename);
  }
}

fn ends_with_impl(filename: &str) -> bool {
  filename.ends_with(".yak.ts")
    || filename.ends_with(".yak.tsx")
    || filename.ends_with(".yak.js")
    || filename.ends_with(".yak.jsx")
    || filename.ends_with(".yak.mjs")
}

lazy_static! {
  static ref YAK_FILE_REGEX: Regex = Regex::new(r"\.yak\.[^.]{2,3}$").unwrap();
}

fn regex_impl(filename: &str) -> bool {
  YAK_FILE_REGEX.is_match(filename)
}

fn last_chars_impl(filename: &str) -> bool {
  // Ignore the valid case of a file with only 7 characters
  // as it would have only an extension and no filename
  if filename.len() < 8 {
    return false;
  }
  matches!(
    &filename[filename.len() - 8..],
    ".yak.tsx" | ".yak.jsx" | ".yak.mjs"
  ) || matches!(&filename[filename.len() - 7..], ".yak.ts" | ".yak.js")
}

/// Check if the filename ends with any of the provided suffixes
/// The suffixes must have the same length
/// The benchmark showed a 2x speedup compared to .ends_with()
/// or regex matching
macro_rules! check_suffixes {
  ($filename:expr, $($suffix:literal),+ $(,)?) => {{
      const fn max_len<const N: usize>(suffixes: [&str; N]) -> usize {
        suffixes[0].len()
      }
      const SUFFIX_LEN: usize = max_len([$($suffix),+]);
      let len = $filename.len();
      if len >= SUFFIX_LEN {
        matches!(&$filename[len - SUFFIX_LEN..],
          $($suffix)|+
        )
      } else {
          false
      }
  }};
}

fn last_chars_impl_macro(filename: &str) -> bool {
  check_suffixes!(filename, ".yak.ts", ".yak.js")
    || check_suffixes!(filename, ".yak.jsx", ".yak.mjs", ".yak.tsx")
}
