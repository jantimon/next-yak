//! Converts a list of CSS declarations to a CSS string
use crate::{CssScope, Declaration};

pub fn to_css(declarations: &[Declaration]) -> String {
    let mut css = String::new();
    let mut previous_scopes: Vec<CssScope> = Vec::new();

    for declaration in declarations {
        let scopes = &declaration.scope;

        // Close scopes that are not in the current declaration
        for i in 0..previous_scopes.len() {
            if i >= scopes.len() || scopes[i] != previous_scopes[i] {
                for j in (i..previous_scopes.len()).rev() {
                    css.push_str(&format!("\n{}}}", "  ".repeat(j)));
                }
                break;
            }
        }

        // Find the open scopes (those which are not in the previous declaration)
        for i in 0..scopes.len() {
            if i >= previous_scopes.len() || scopes[i] != previous_scopes[i] {
                for j in i..scopes.len() {
                    css.push_str(&format!("\n{}{} {{", "  ".repeat(j), scopes[j].name));
                }
                break;
            }
        }

        css.push_str(&format!("\n{}{}: {};", "  ".repeat(scopes.len()), declaration.property, declaration.value));

        previous_scopes = scopes.to_vec();
    }

    // Close all scopes with proper indentation
    for i in (0..previous_scopes.len()).rev() {
        css.push_str(&format!("\n{}}}", "  ".repeat(i)));
    }

    css
}

#[cfg(test)]
mod tests {
    use super::*;
    use insta::assert_snapshot;
    use crate::parse_css;

    #[test]
    fn test_parse_css_incomplete_css_1() {
        let (_, declarations) = parse_css(
            r#"
            .foo {
                    .fancy {
                            /* hello .world { color: red; } */
                            color: blue;
        "#,
            None,
        );
        assert_snapshot!(to_css(&declarations));
    }

    #[test]
    fn test_parse_css_combine_two_independent_css_chunks() {
        let (_, declarations1) = parse_css(
            r#"
            .foo {
                    .fancy {
                            /* hello .world { color: red; } */
                            color: blue;
        "#,
            None,
        );
        let (_, declarations2) = parse_css(
            r#"
          .foo {
                  .fancy {
                          /* hello .world { color: red; } */
                          background: red;
      "#,
            None,
        );
        let combined_declarations: Vec<_> = declarations1.into_iter().chain(declarations2.into_iter()).collect();
        assert_snapshot!(to_css(&combined_declarations));
    }

    #[test]
    fn test_parse_css_merge_two_css_chunks() {
        let (state1, declarations1) = parse_css(
            r#"
      .foo {
              .fancy {
                      /* hello .world { color: red; } */
                      color: blue;
    "#,
            None,
        );
        let (_, declarations2) = parse_css(
            r#"
      }
        &:hover {
          color: orange;
    "#,
            Some(state1),
        );
        let combined_declarations: Vec<_> = declarations1.into_iter().chain(declarations2.into_iter()).collect();
        assert_snapshot!(to_css(&combined_declarations));
    }

    #[test]
    fn test_parse_css_merge_two_css_chunks_and_inject_a_scope() {
        let (state1, declarations1) = parse_css(
            r#"
      .foo {
              .fancy {
                      /* hello .world { color: red; } */
                      color: blue;
    "#,
            None,
        );
        let (_, mut declarations2) = parse_css(
            r#"
      }
        &:hover {
          color: orange;
    "#,
            Some(state1),
        );
        declarations2[0].scope.insert(
            0,
            CssScope {
                name: ".isActive".to_string(),
                scope_type: "selector".to_string(),
            },
        );
        let combined_declarations: Vec<_> = declarations1.into_iter().chain(declarations2.into_iter()).collect();
        assert_snapshot!(to_css(&combined_declarations));
    }

    #[test]
    fn test_handles_escapes_correctly() {
        let (_, declarations) = parse_css(
            r#"
            .foo {
              content: "line1\\\nline2";
            }
        "#,
            None,
        );
        assert_snapshot!(to_css(&declarations));
    }
}