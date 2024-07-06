//! This module provides functionality for parsing incomplete CSS strings.
use serde::{Deserialize, Serialize};
use serde_repr::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ParserState {
  pub is_inside_string: Option<char>,
  pub is_inside_comment: bool,
  pub is_inside_property_value: bool,
  pub is_inside_at_rule: bool,
  pub current_scopes: Vec<CssScope>,
  current_declaration: Declaration,
  pub pending_css_segment: String,
}

impl ParserState {
  pub fn new() -> Self {
    Self {
      is_inside_string: None,
      is_inside_comment: false,
      is_inside_property_value: false,
      is_inside_at_rule: false,
      current_scopes: Vec::new(),
      current_declaration: new_declaration(),
      pending_css_segment: String::new(),
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
  let mut state = initial_state.unwrap_or(ParserState::new());

  // Prepend any pending CSS segment from the previous state
  let css_to_parse = if !state.pending_css_segment.is_empty() {
    // Reset the state to properly parse the pending CSS segment
    state.is_inside_string = None;
    state.is_inside_comment = false;
    state.is_inside_property_value = false;
    state.is_inside_at_rule = false;
    state.current_declaration = new_declaration();
    state.pending_css_segment.clone() + css_string
  } else {
    css_string.to_string()
  };

  let mut current_code = String::new();
  let mut back_slashes = 0;
  let mut declarations = Vec::new();

  let chars: Vec<char> = css_to_parse.chars().collect();
  let mut char_position = 0;

  while char_position < chars.len() {
    let previous_back_slashes = back_slashes;
    let current_character = chars[char_position];

    // Count backslashes to detect escaped characters
    // e.g.:
    // .foo { content: "Hello, \"World!\\\""; }
    if current_character == '\\' {
      back_slashes += 1;
    } else {
      back_slashes = 0;
    }

    // Detect unescaped strings
    // e.g.:
    // url("Hello, World!")
    //     ^
    // or
    // url('Hello, World!')
    //     ^
    if previous_back_slashes % 2 == 0 && (current_character == '"' || current_character == '\'') {
      if state.is_inside_string == Some(current_character) {
        state.is_inside_string = None;
      } else if state.is_inside_string.is_none() {
        state.is_inside_string = Some(current_character);
      }
    }

    // Inside a string, just add the character to the current code no matter what
    // e.g. content: "{ ; } @ !"
    if state.is_inside_string.is_some() {
      current_code.push(current_character);
      state.current_declaration.value.push(current_character);
    }
    // Detect multi-line comments
    // e.g.
    // .foo { color: red; } /* This is a comment */
    //                      ^
    else if current_character == '/'
      && char_position + 1 < chars.len()
      && chars[char_position + 1] == '*'
    {
      state.is_inside_comment = true;
      char_position += 2;
      while char_position < chars.len() {
        if chars[char_position] == '*'
          && char_position + 1 < chars.len()
          && chars[char_position + 1] == '/'
        {
          state.is_inside_comment = false;
          char_position += 2;
          break;
        }
        char_position += 1;
      }
      continue;
    }
    // Detect single line comments
    // e.g.
    // .foo { color: red; } // This is a comment
    //                       ^
    else if current_character == '/'
      && char_position + 1 < chars.len()
      && chars[char_position + 1] == '/'
    {
      state.is_inside_comment = true;
      char_position += 2;
      while char_position < chars.len() {
        if chars[char_position] == '\n' {
          state.is_inside_comment = false;
          break;
        }
        char_position += 1;
      }
      continue;
    }
    // Detect scope closing
    // e.g.
    // .foo { color: black; }
    //                      ^
    // or
    // .foo { color: black }
    //                     ^
    else if current_character == '}' {
      state.current_scopes.pop();
      current_code.clear();
      state.is_inside_property_value = false;
      state
        .current_declaration
        .scope
        .clone_from(&state.current_scopes);
      // a closing brace acts similar to a semicolon as it
      // closes the current declaration
      if !state.current_declaration.property.is_empty() {
        state.current_declaration.closed = true;
        declarations.push(state.current_declaration.clone());
        state.current_declaration = new_declaration();
      }
    }
    // Detect scope opening
    // e.g.
    // .foo {
    //      ^
    // or
    // @media (max-width: 600px) {
    //                           ^
    else if current_character == '{' {
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
    }
    // Detect declaration closing
    // e.g.
    // color: red;
    //           ^
    else if current_character == ';' {
      current_code.clear();
      state.is_inside_property_value = false;
      state.is_inside_at_rule = false;
      // a semicolon closes the current declaration
      if !state.current_declaration.property.is_empty() {
        state.current_declaration.closed = true;
        state
          .current_declaration
          .scope
          .clone_from(&state.current_scopes);
        declarations.push(state.current_declaration.clone());
        state.current_declaration = new_declaration();
      }
    }
    // Detect property value separator
    // e.g.
    // color: red;
    //      ^
    else if !state.is_inside_property_value
      && !state.is_inside_at_rule
      && current_character == ':'
    {
      state.is_inside_property_value = true;
      current_code.push(current_character);
    }
    // Detect at-rules
    // e.g.
    // @media (max-width: 600px) {
    // ^
    else if !state.is_inside_property_value && current_character == '@' {
      state.is_inside_at_rule = true;
      current_code.push(current_character);
    }
    // Detect other characters
    // e.g.
    // color: red;
    // ^
    // Trim any leading whitespace in front of the value
    else {
      let previous_character = if char_position == 0 {
        state.current_declaration.value.chars().last()
      } else {
        Some(chars[char_position - 1])
      };

      let is_previous_character_empty = (char_position > 0 && current_code.is_empty())
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

    char_position += 1;
  }

  // Store any uncategorized CSS code for later parsing
  // The reason behind that is the following example where it is unclear from the syntax wether
  // the ending is a property declaration or a selector:
  // .foo { section:has(bar)
  // .foo { background:url(bar)
  if !current_code.is_empty() {
    state.pending_css_segment = current_code;
    state.current_declaration = new_declaration();
  } else {
    state.pending_css_segment.clear();
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

  #[test]
  fn test_parse_css_incomplete_css_ending_without_semicolon() {
    let (state, declarations) = parse_css(
      r#"
        .foo {
          color: orange
    "#,
      None,
    );
    assert_debug_snapshot!((state, declarations));
  }

  #[test]
  fn test_parse_css_resume_incomplete_css_ending_without_semicolon() {
    let (state1, declarations) = parse_css(
      r#"
        .foo {
          color: orange
    "#,
      None,
    );
    let (state2, declarations2) = parse_css(
      r#"
        ;
    "#,
      Some(state1.clone()),
    );
    let all_declarations = declarations
      .into_iter()
      .chain(declarations2.into_iter())
      .collect::<Vec<_>>();
    assert_debug_snapshot!((state1, state2, all_declarations));
  }
}
