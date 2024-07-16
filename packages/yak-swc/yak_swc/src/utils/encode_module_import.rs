use percent_encoding::{utf8_percent_encode, NON_ALPHANUMERIC};

/// This function generates a special CSS selector that represents an import from another module,
/// encoding the module path and imported properties to ensure CSS parser compatibility
///
/// # Arguments
///
/// * `module_path` - The path to the module being imported
/// * `kind` - The type of import, e.g. `module`, `inline`, `any`
/// * `import_chain` - The member expression or variable name of the imported property
///
/// # Returns
///
/// A `String` containing the encoded module import selector
///
/// # Examples
///
/// Lets say we want to create a module import for ${breakpoints["<xs"].min} from "./styles/media"
///
/// ```
/// let selector = encode_module_import("./styles/media", "any", vec!["breakpoints", "<xs", "min"]);
/// assert_eq!(selector, ":yak-css-import(./styles/media:module:breakpoints:%3Cxs:min)");
/// ```
///
/// # Notes
///
/// - The function uses URL encoding for the import chain to handle special characters
/// - The resulting string is meant to be processed and resolved by the yak css loader
/// - The kind gives a hint how the import can be used - to provide an error message if the import is not supported
pub fn encode_module_import(module_path: &str, kind: &str, import_chain: Vec<String>) -> String {
  let encoded_chain = import_chain
    .into_iter()
    .map(|part| utf8_percent_encode(&part, NON_ALPHANUMERIC).to_string())
    .collect::<Vec<String>>()
    .join(":");
  format!(
    ":yak-css-import({}:{}:{})",
    module_path, kind, encoded_chain
  )
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_encode_module_import() {
    let selector = encode_module_import(
      "./styles/media",
      "any",
      vec![
        "breakpoints".to_string(),
        "<xs".to_string(),
        "min".to_string(),
      ],
    );
    assert_eq!(
      selector,
      ":yak-css-import(./styles/media:any:breakpoints:%3Cxs:min)"
    );
  }

  #[test]
  fn test_encode_module_import_single_item_chain() {
    let selector = encode_module_import("./styles/media", "any", vec!["breakpoints".to_string()]);
    assert_eq!(selector, ":yak-css-import(./styles/media:any:breakpoints)");
  }

  #[test]
  fn test_encode_module_import_special_characters() {
    let selector = encode_module_import(
      "./styles/media",
      "any",
      vec!["breakpoints".to_string(), "xs".to_string()],
    );
    assert_eq!(
      selector,
      ":yak-css-import(./styles/media:any:breakpoints:xs)"
    );
  }

  #[test]
  fn test_encode_module_import_special_characters_encoded() {
    let selector = encode_module_import(
      "./styles/media",
      "inline",
      vec!["breakpoints".to_string(), "<:\">".to_string()],
    );
    assert_eq!(
      selector,
      ":yak-css-import(./styles/media:inline:breakpoints:%3C%3A%22%3E)"
    );
  }
}
