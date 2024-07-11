use std::collections::HashSet;
use std::hash::{DefaultHasher, Hasher};

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
    let hash = {
      let mut hasher = DefaultHasher::new();
      hasher.write(file_name.as_bytes());
      hasher.finish()
    };
    let hash_str = format!("{:x}", hash);
    let css_variable_name = format!("{}-{}", name, &hash_str[..5]);
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
      "y-1fc5c"
    );
    assert_eq!(
      convention.get_css_variable_name("foo", "file.css", true),
      "foo-1fc5c"
    );
    assert_eq!(
      convention.get_css_variable_name("", "file.css", true),
      "yak-1fc5c"
    );
  }
}
