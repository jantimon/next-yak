//! This module provides functionality for parsing incomplete CSS strings.

use serde::{Deserialize, Serialize};
use serde_repr::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ParserState {
  is_inside_string: Option<char>,
  is_inside_comment: bool,
  is_inside_property_value: bool,
  is_inside_at_rule: bool,
  pub current_scopes: Vec<CssScope>,
  current_declaration: Declaration,
}

impl ParserState {
  pub fn new(base_scopes: Option<Vec<CssScope>>) -> Self {
    Self {
      is_inside_string: None,
      is_inside_comment: false,
      is_inside_property_value: false,
      is_inside_at_rule: false,
      current_scopes: base_scopes.unwrap_or_default(),
      current_declaration: new_declaration(),
    }
  }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct CssScope {
  pub name: String,
  #[serde(rename = "type")]
  pub scope_type: ScopeType,
}

#[derive(Serialize_repr, Deserialize_repr, PartialEq, Debug, Clone)]
#[repr(u8)]
pub enum ScopeType {
  Selector = 0,
  AtRule = 1,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct Declaration {
  pub property: String,
  pub value: String,
  pub scope: Vec<CssScope>,
  pub closed: bool,
}

fn new_declaration() -> Declaration {
  Declaration {
    property: String::new(),
    value: String::new(),
    scope: Vec::new(),
    closed: false,
  }
}

/// Parses a CSS string and returns the final parser state along with parsed declarations.
///
/// # Arguments
///
/// * `css_string` - A string slice containing the CSS to parse
/// * `initial_state` - An optional initial parser state from a previous parsing
///
/// # Returns
///
/// A tuple containing the final `ParserState` and a vector of `Declaration`s
pub fn parse_css(
  css_string: &str,
  initial_state: Option<ParserState>,
) -> (ParserState, Vec<Declaration>) {
  let mut state = initial_state.unwrap_or(ParserState::new(None));

  let mut current_code = String::new();
  let mut back_slashes = 0;
  let mut declarations = Vec::new();

  let chars: Vec<char> = css_string.chars().collect();
  let mut index = 0;

  while index < chars.len() {
    let previous_back_slashes = back_slashes;
    let current_character = chars[index];

    if current_character == '\\' {
      back_slashes += 1;
    } else {
      back_slashes = 0;
    }

    if previous_back_slashes % 2 == 0 && (current_character == '"' || current_character == '\'') {
      if state.is_inside_string == Some(current_character) {
        state.is_inside_string = None;
      } else if state.is_inside_string.is_none() {
        state.is_inside_string = Some(current_character);
      }
    }

    if state.is_inside_string.is_some() {
      current_code.push(current_character);
      state.current_declaration.value.push(current_character);
    } else if current_character == '/' && index + 1 < chars.len() && chars[index + 1] == '*' {
      state.is_inside_comment = true;
      index += 2;
      while index < chars.len() {
        if chars[index] == '*' && index + 1 < chars.len() && chars[index + 1] == '/' {
          state.is_inside_comment = false;
          index += 2;
          break;
        }
        index += 1;
      }
      continue;
    } else if current_character == '/' && index + 1 < chars.len() && chars[index + 1] == '/' {
      state.is_inside_comment = true;
      index += 2;
      while index < chars.len() {
        if chars[index] == '\n' {
          state.is_inside_comment = false;
          break;
        }
        index += 1;
      }
      continue;
    } else if current_character == '}' {
      state.current_scopes.pop();
      current_code.clear();
      state.is_inside_property_value = false;
      state
        .current_declaration
        .scope
        .clone_from(&state.current_scopes);
      if !state.current_declaration.property.is_empty() {
        state.current_declaration.closed = true;
        declarations.push(state.current_declaration.clone());
        state.current_declaration = new_declaration();
      }
    } else if current_character == '{' {
      state.current_scopes.push(CssScope {
        name: current_code.trim().to_string(),
        scope_type: if state.is_inside_at_rule {
          ScopeType::AtRule
        } else {
          ScopeType::Selector
        },
      });
      current_code.clear();
      state.is_inside_property_value = false;
      state.is_inside_at_rule = false;
      state.current_declaration.property.clear();
      state.current_declaration.value.clear();
    } else if current_character == ';' {
      current_code.clear();
      state.is_inside_property_value = false;
      state.is_inside_at_rule = false;
      if !state.current_declaration.property.is_empty() {
        state.current_declaration.closed = true;
        state
          .current_declaration
          .scope
          .clone_from(&state.current_scopes);
        declarations.push(state.current_declaration.clone());
        state.current_declaration = new_declaration();
      }
    } else if !state.is_inside_property_value
      && !state.is_inside_at_rule
      && current_character == ':'
    {
      state.is_inside_property_value = true;
      current_code.push(current_character);
    } else if !state.is_inside_property_value && current_character == '@' {
      state.is_inside_at_rule = true;
      current_code.push(current_character);
    } else {
      let previous_character = if index == 0 {
        state.current_declaration.value.chars().last()
      } else {
        Some(chars[index - 1])
      };

      let is_previous_character_empty = (index > 0 && current_code.is_empty())
        || previous_character.map_or(true, |c| c.is_whitespace());
      let is_current_character_empty = current_character.is_whitespace();

      if !is_previous_character_empty || !is_current_character_empty {
        current_code.push(current_character);
        if state.is_inside_property_value {
          if !is_current_character_empty || !state.current_declaration.value.is_empty() {
            state.current_declaration.value.push(current_character);
          }
        } else {
          state.current_declaration.property.push(current_character);
        }
      }
    }

    index += 1;
  }

  // Only add the last declaration if it's not empty and not already closed
  if !state.current_declaration.property.is_empty() && !state.current_declaration.closed {
    state
      .current_declaration
      .scope
      .clone_from(&state.current_scopes);
    declarations.push(state.current_declaration.clone());
  }

  (state, declarations)
}

#[cfg(test)]
mod tests {
  use super::*;
  use insta::assert_debug_snapshot;

  #[test]
  fn test_parse_css_incomplete_css_1() {
    let (state, declarations) = parse_css(
      r#"
        .foo {
                .fancy {
                        /* hello .world { color: red; } */
                        color: blue;
    "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_incomplete_css_1_ending_inside_a_comment() {
    let (state, declarations) = parse_css(
      r#"
        .foo {
                .fancy {
                        /* hello .world { color: red; }
    "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_incomplete_css_1_ending_inside_a_string() {
    let (state, declarations) = parse_css(
      r#"
        .foo {
                .fancy {
                        background: url('https://example.com
    "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_incomplete_css_1_ending_inside_a_double_quote_string() {
    let (state, declarations) = parse_css(
      r#"
        .foo {
                .fancy {
                        background: url("https://example.com
    "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_incomplete_css_1_ending_outside_a_comment() {
    let (state, declarations) = parse_css(
      r#"
        .foo {
                .fancy section {
                        /* background: url("https://example.com */
                        color: blue
    "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_incomplete_css_1_with_media_rule() {
    let (state, declarations) = parse_css(
      r#"
                .foo {
                                .fancy {
                                                background: url('https://example.com');



                @media (max-width: 600px) {
                                .baz {
                                                color: red;

        "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_complete_css_with_media_rule() {
    let (state, declarations) = parse_css(
      r#"
    .foo {
      .fancy {
        background: url("https://example.com");

        @media (max-width: 600px) {
          .baz {
            color: red;
          }
        }
      }
      background: url("https://example.com");
      body {
        padding: 0;
      }
    }
  "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }
}
