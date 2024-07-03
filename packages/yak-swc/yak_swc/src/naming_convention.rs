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
    let mut count = 0;
    let name = loop {
      let candidate = if count == 0 {
        escaped_name.clone()
      } else {
        format!("{}-{:02}", escaped_name, count)
      };
      if !self.used_variables.contains(&candidate) {
        break candidate;
      }
      count += 1;
    };
    self.used_variables.insert(name.clone());
    name
  }
}

fn escape_css_identifier(input: &str) -> String {
  let mut result = String::new();
  let mut chars = input.chars().peekable();

  while let Some(c) = chars.next() {
    match c {
      'a'..='z' | 'A'..='Z' | '-' | '_' | '$' | '\\' => result.push(c),
      // Whitespace
      c if c == ' ' || c == '\t' => {
        result.push('_');
      }
      // Remove control characters
      '\0'..='\x1F' | '\x7F' => continue,
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
}
