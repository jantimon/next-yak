use relative_posix_path::relative_posix_path;

fn main() {
  let base_path = "C:\\foo\\";
  let filename = "C:\\bar\\baz.txt";
  let relative_path = relative_posix_path(base_path, filename);
  println!("{}", relative_path);
  assert_eq!(relative_path, "../bar/baz.txt");
}
