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

  // and that's the actual benchmark
  divan::main();
}

const FILENAMES: [&str; 4] = [
  "short_filename.yak.ts",
  "short_filename.yak.tsx",
  "short_filename.yak.js",
  "short_filename.yak.jsx",
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

fn ends_with_impl(filename: &str) -> bool {
  filename.ends_with(".yak.ts")
    || filename.ends_with(".yak.tsx")
    || filename.ends_with(".yak.js")
    || filename.ends_with(".yak.jsx")
}

lazy_static! {
  static ref YAK_FILE_REGEX: Regex = Regex::new(r"\.yak\.[^.]+$").unwrap();
}

fn regex_impl(filename: &str) -> bool {
  YAK_FILE_REGEX.is_match(filename)
}
