use crate::{utils::css_hash::hash_to_css, variable_visitor::ScopedVariableReference};
use rustc_hash::FxHashMap;

pub struct NamingConvention {
  postfix_counters: FxHashMap<String, u32>,
  file_name: String,
  file_name_hash: Option<String>,
  dev_mode: bool,
}

/// A naming convention that generates safe unique names for CSS variables, classes, and other identifiers.
/// Use the `generate_unique_name` method to generate a unique name based on a base name.
/// e.g. `generate_unique_name("foo bar")` might return `"foo_bar-01"`, `"foo_bar-02"`, etc.
impl NamingConvention {
  pub fn new(file_name: String, dev_mode: bool) -> Self {
    Self {
      postfix_counters: FxHashMap::default(),
      file_name,
      file_name_hash: None,
      dev_mode,
    }
  }

  /// Returns the hash of the file name
  /// This allows to generate unique names based on the file name
  /// which will be consistent across multiple builds
  pub fn get_file_name_hash(&mut self) -> String {
    if let Some(hash) = &self.file_name_hash {
      hash.clone()
    } else {
      let hash = hash_to_css(&self.file_name);
      self.file_name_hash = Some(hash.clone());
      hash
    }
  }

  /// Adds a postfix to a base name to make it unique
  /// e.g. `generate_unique_name("foo bar")` might return `"foo_bar-01"`, `"foo_bar-02"`, etc.
  pub fn generate_unique_name(&mut self, base_name: &str) -> String {
    let escaped_name = escape_css_identifier(base_name);
    if escaped_name.is_empty() {
      return self.generate_unique_name("yak");
    }
    let counter = self
      .postfix_counters
      .entry(escaped_name.clone())
      .or_insert(0);
    *counter += 1;
    // Postfix only if there is more than one occurrence
    if *counter == 1 {
      escaped_name
    } else if self.dev_mode {
      format!("{}-{:02}", escaped_name, *counter - 1)
    } else {
      format!("{}{}", escaped_name, *counter - 1)
    }
  }

  // Generate a unique name for a variable reference
  // e.g "foo.bar" -> "foo_bar-01"
  pub fn generate_unique_name_for_variable(
    &mut self,
    variable: &ScopedVariableReference,
  ) -> String {
    self.generate_unique_name(&variable.to_readable_string())
  }

  /// Generate a unique CSS variable name based on the file name and a base name
  pub fn get_css_variable_name(&mut self, base_name: &str) -> String {
    let name: String = if self.dev_mode {
      if base_name.is_empty() {
        String::from("yak_")
      } else {
        format!("{}_", base_name)
      }
    } else {
      String::from("y")
    };
    let css_variable_name = format!("{}{}", name, self.get_file_name_hash());
    self.generate_unique_name(&css_variable_name)
  }
}

fn escape_css_identifier(input: &str) -> String {
  let mut result = String::new();
  let chars = input.chars();

  for c in chars {
    match c {
      'a'..='z' | 'A'..='Z' | '-' | '_' | '$' | '\\' => result.push(c),
      // Whitespace and member expression separator
      ' ' | '\t' | '.' => {
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
    assert_eq!(escape_css_identifier("foo.bar"), "foo_bar");
    assert_eq!(escape_css_identifier("foo\tbar"), "foo_bar");
    assert_eq!(escape_css_identifier("foo\nbar"), "foobar");
    assert_eq!(escape_css_identifier("1foo"), "_1foo");
    assert_eq!(escape_css_identifier("1"), "_1");
    assert_eq!(escape_css_identifier(" "), "_");
    assert_eq!(escape_css_identifier("\t"), "_");
  }

  #[test]
  fn css_naming_convention() {
    let mut convention = NamingConvention::new("file.css".into(), true);
    assert_eq!(convention.generate_unique_name("foo"), "foo");
    assert_eq!(convention.generate_unique_name("foo"), "foo-01");
    assert_eq!(convention.generate_unique_name("foo"), "foo-02");
  }

  #[test]
  fn css_variable_name() {
    let mut convention = NamingConvention::new("file.css".into(), false);
    assert_eq!(convention.get_css_variable_name("foo"), "yoPBkbU");
    assert_eq!(convention.get_css_variable_name("foo"), "yoPBkbU1");
    assert_eq!(convention.get_css_variable_name(""), "yoPBkbU2");
  }

  #[test]
  fn css_variable_name_dev_mode() {
    let mut convention = NamingConvention::new("file.css".into(), true);
    assert_eq!(convention.get_css_variable_name("foo"), "foo_oPBkbU");
    assert_eq!(convention.get_css_variable_name("foo"), "foo_oPBkbU-01");
    assert_eq!(convention.get_css_variable_name(""), "yak_oPBkbU");
  }
}
