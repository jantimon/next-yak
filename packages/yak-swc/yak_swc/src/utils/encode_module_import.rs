use css_in_js_parser::{parse_css, ParserState};
use percent_encoding::{utf8_percent_encode, NON_ALPHANUMERIC};
use swc_core::atoms::Atom;

/// This function generates a special CSS selector that represents an import from another module,
/// encoding the module path and imported properties to ensure CSS parser compatibility
///
/// # Arguments
///
/// * `module_path` - The path to the module being imported
/// * `import_chain` - The member expression or variable name of the imported property
///
/// # Returns
///
/// A `String` containing the encoded module import selector
///
/// # Examples
///
/// Lets say we want to create a module import for ${breakpoints["<xs"].min} from "./styles/media"
/// it gets converted to --yak-css-import: url("./styles/media:module:breakpoints:%3Cxs:min")
///
///
/// # Notes
///
/// - The function uses URL encoding for the import chain to handle special characters
/// - The resulting string is meant to be processed and resolved by the yak css loader
/// - The kind gives a hint how the import can be used - to provide an error message if the import is not supported
pub fn encode_module_import(module_path: &str, import_chain: Vec<Atom>) -> String {
  let encoded_chain = import_chain
    .into_iter()
    .map(|part| utf8_percent_encode(&part, NON_ALPHANUMERIC).to_string())
    .collect::<Vec<String>>()
    .join(":");
  format!(
    "--yak-css-import: url(\"{}:{}\")",
    module_path, encoded_chain
  )
}

pub fn is_mixin_expression(
  css_state: Option<ParserState>,
  css_code: String,
  next_css_code: Option<String>,
) -> bool {
  let next_css = next_css_code.unwrap_or("".to_string());
  let next_css = if next_css.is_empty() {
    ";".to_string()
  } else {
    next_css
  };
  let (_, next_declaration) = parse_css(format!("{css_code}{next_css}").as_str(), css_state);
  // If the next declaration is a import declaration, it is a mixin expression as the css parser expected a
  // css property value pair
  !next_declaration.is_empty() && next_declaration.first().unwrap().property == "--yak-css-import"
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_encode_module_import() {
    let selector = encode_module_import(
      "./styles/media",
      vec![
        Atom::from("breakpoints"),
        Atom::from("<xs"),
        Atom::from("min"),
      ],
    );
    assert_eq!(
      selector,
      "--yak-css-import: url(\"./styles/media:breakpoints:%3Cxs:min\")"
    );
  }

  #[test]
  fn test_encode_module_import_single_item_chain() {
    let selector = encode_module_import("./styles/media", vec![Atom::from("breakpoints")]);
    assert_eq!(
      selector,
      "--yak-css-import: url(\"./styles/media:breakpoints\")"
    );
  }

  #[test]
  fn test_encode_module_import_special_characters() {
    let selector = encode_module_import(
      "./styles/media",
      vec![Atom::from("breakpoints"), Atom::from("xs")],
    );
    assert_eq!(
      selector,
      "--yak-css-import: url(\"./styles/media:breakpoints:xs\")"
    );
  }

  #[test]
  fn test_encode_module_import_special_characters_encoded() {
    let selector = encode_module_import(
      "./styles/media",
      vec![Atom::from("breakpoints"), Atom::from("<:\">")],
    );
    assert_eq!(
      selector,
      "--yak-css-import: url(\"./styles/media:breakpoints:%3C%3A%22%3E\")"
    );
  }
}
