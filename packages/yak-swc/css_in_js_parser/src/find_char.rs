/// Finds the next occurrence of any specified character in a CSS-like text,
/// taking into account string literals and comments.
///
/// This function is useful for parsing CSS-like syntax where you need to find
/// specific delimiters or markers while ignoring those same characters when they
/// appear within string literals or comments.
///
/// # Arguments
///
/// * `text` - A string slice that contains the text to search.
/// * `search_chars` - A slice of characters to search for.
///
/// # Returns
///
/// Returns `Some((char, usize))` if a character from `search_chars` is found,
/// where `char` is the found character and `usize` is its position in the input text.
/// Returns `None` if no character from `search_chars` is found before the end of the text.
///
pub fn find_char(text: &str, search_chars: &[char]) -> Option<(char, usize)> {
  let mut is_inside_string: Option<char> = None;
  let mut current_comment_state = CommentStateType::None;
  let mut back_slashes = 0;

  let chars: Vec<char> = text.chars().collect();
  let mut char_position = 0;

  while char_position < chars.len() {
    let previous_back_slashes = back_slashes;
    let current_character = chars[char_position];

    if current_character == '\\' {
      back_slashes += 1;
    } else {
      back_slashes = 0;
    }

    match current_comment_state {
      CommentStateType::MultiLine => {
        if current_character == '*'
          && char_position + 1 < chars.len()
          && chars[char_position + 1] == '/'
        {
          current_comment_state = CommentStateType::None;
          char_position += 2;
          continue;
        }
      }
      CommentStateType::SingleLine => {
        if current_character == '\n' {
          current_comment_state = CommentStateType::None;
          char_position += 1;
          continue;
        }
      }
      CommentStateType::None => {
        if previous_back_slashes % 2 == 0 && (current_character == '"' || current_character == '\'')
        {
          if is_inside_string == Some(current_character) {
            is_inside_string = None;
          } else if is_inside_string.is_none() {
            is_inside_string = Some(current_character);
          }
        } else if is_inside_string.is_none() {
          if current_character == '/' && char_position + 1 < chars.len() {
            if chars[char_position + 1] == '*' {
              current_comment_state = CommentStateType::MultiLine;
              char_position += 2;
              continue;
            } else if chars[char_position + 1] == '/' {
              current_comment_state = CommentStateType::SingleLine;
              char_position += 2;
              continue;
            }
          }

          if search_chars.contains(&current_character) {
            return Some((current_character, char_position));
          }
        }
      }
    }

    char_position += 1;
  }

  None
}

#[derive(PartialEq, Debug, Clone)]
enum CommentStateType {
  None,
  SingleLine,
  MultiLine,
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_basic_search() {
    let css = "color: red; background: blue;";
    let search_chars = &[';', '{', '}'];
    assert_eq!(find_char(css, search_chars), Some((';', 10)));
  }

  #[test]
  fn test_ignore_string_content() {
    let css = "content: ';'; color: red;";
    let search_chars = &[';'];
    assert_eq!(find_char(css, search_chars), Some((';', 12)));
  }

  #[test]
  fn test_ignore_single_line_comment() {
    let css = "// ; this is a comment\nbackground: blue;";
    let search_chars = &[';'];
    assert_eq!(find_char(css, search_chars), Some((';', 39)));
  }

  #[test]
  fn test_ignore_multi_line_comment() {
    let css = "color: /* ; this is a\n multi-line comment */ blue;";
    let search_chars = &[';'];
    assert_eq!(find_char(css, search_chars), Some((';', 49)));
  }

  #[test]
  fn test_escaped_characters() {
    let css = "content: '\\\";'; color: red;";
    let search_chars = &[';'];
    assert_eq!(find_char(css, search_chars), Some((';', 14)));
  }

  #[test]
  fn test_no_match() {
    let css = "color: red background: blue";
    let search_chars = &[';', '{', '}'];
    assert_eq!(find_char(css, search_chars), None);
  }

  #[test]
  fn test_multiple_search_chars() {
    let css = "a { color: red; }";
    let search_chars = &[';', '{', '}'];
    assert_eq!(find_char(css, search_chars), Some(('{', 2)));
  }
}
