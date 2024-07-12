use crate::utils::murmur_hash::murmurhash2_32_gc;
use std::collections::HashSet;

pub struct NamingConvention {
  used_variables: HashSet<String>,
}

/// A naming convention that generates safe unique names for CSS variables, classes, and other identifiers.
/// Use the `generate_unique_name` method to generate a unique name based on a base name.
/// e.g. `generate_unique_name("foo bar")` might return `"foo_bar-01"`, `"foo_bar-02"`, etc.
impl NamingConvention {
  pub fn new() -> Self {
    Self {
      used_variables: HashSet::new(),
    }
  }

  pub fn generate_unique_name(&mut self, base_name: &str) -> String {
    let escaped_name = escape_css_identifier(base_name);
    if escaped_name.is_empty() {
      return self.generate_unique_name("yak");
    }
    let mut count = 0;
    let mut name = escaped_name.clone();
    while self.used_variables.contains(&name) {
      count += 1;
      name = format!("{}-{:02}", escaped_name, count);
    }
    self.used_variables.insert(name.clone());
    name
  }

  /// Generate a unique CSS variable name based on the file name and a base name
  pub fn get_css_variable_name(
    &mut self,
    base_name: &str,
    file_name: &str,
    dev_mode: bool,
  ) -> String {
    let name: &str = if dev_mode {
      if base_name.is_empty() {
        "yak"
      } else {
        base_name
      }
    } else {
      "y"
    };
    // TODO - don't hash the same file name every over and over again
    let css_variable_name = format!("{}_{}", name, murmurhash2_32_gc(file_name));
    self.generate_unique_name(&css_variable_name)
  }
}

fn escape_css_identifier(input: &str) -> String {
  let mut result = String::new();
  let chars = input.chars();

  for c in chars {
    match c {
      'a'..='z' | 'A'..='Z' | '-' | '_' | '$' | '\\' => result.push(c),
      // Whitespace
      ' ' | '\t' => {
        result.push('_');
      }
      // Remove control characters
      '\0'..='\x1F' | '\x7F' | '.' => continue,
      // Escape Unicode characters
      c if c > '\u{00FF}' => {
        result.push('\\');
        result.push(c);
      }
      // ASCII digits
      c if c.is_ascii_digit() => {
        // ASCII digits are not allowed as the first character
        if result.is_empty() {
          result.push('_');
        }
        result.push(c);
      }
      // Escape all other characters
      c => {
        result.push('\\');
        result.push(c);
      }
    }
  }

  result
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn css_escape_css_identifier() {
    assert_eq!(escape_css_identifier("foo"), "foo");
    assert_eq!(escape_css_identifier("foo-bar"), "foo-bar");
    assert_eq!(escape_css_identifier("foo_bar"), "foo_bar");
    assert_eq!(escape_css_identifier("foo$bar"), "foo$bar");
    assert_eq!(escape_css_identifier("foo\\bar"), "foo\\bar");
    assert_eq!(escape_css_identifier("foo💩bar"), "foo\\💩bar");
    assert_eq!(escape_css_identifier("foo bar"), "foo_bar");
    assert_eq!(escape_css_identifier("foo\tbar"), "foo_bar");
    assert_eq!(escape_css_identifier("foo\nbar"), "foobar");
    assert_eq!(escape_css_identifier("1foo"), "_1foo");
    assert_eq!(escape_css_identifier("1"), "_1");
    assert_eq!(escape_css_identifier(" "), "_");
    assert_eq!(escape_css_identifier("\t"), "_");
  }

  #[test]
  fn css_naming_convention() {
    let mut convention = NamingConvention::new();
    assert_eq!(convention.generate_unique_name("foo"), "foo");
    assert_eq!(convention.generate_unique_name("foo"), "foo-01");
    assert_eq!(convention.generate_unique_name("foo"), "foo-02");
  }

  #[test]
  fn css_variable_name() {
    let mut convention = NamingConvention::new();
    assert_eq!(
      convention.get_css_variable_name("foo", "file.css", false),
      "y_17k2ec6"
    );
    assert_eq!(
      convention.get_css_variable_name("foo", "file.css", true),
      "foo_17k2ec6"
    );
    assert_eq!(
      convention.get_css_variable_name("", "file.css", true),
      "yak_17k2ec6"
    );
  }
}
