use std::collections::{HashMap, HashSet};
use swc_core::{
  common::DUMMY_SP,
  ecma::{ast::*, visit::VisitMut},
};

#[derive(Debug)]
/// Visitor implementation to gather all names imported from "next-yak"
/// Side effect: converts the import source from "next-yak" to "next-yak/internal"
pub struct YakImportVisitor {
  /// Imports from "next-yak"
  yak_library_imports: HashMap<String, String>,
  /// Utilities used from "next-yak/internal"
  yak_utilities: HashMap<String, Ident>,
  /// Identifiers used in the css function
  pub yak_css_idents: HashSet<String>,
}

const UTILITIES: &[&str] = &["unitPostFix", "mergeCssProp"];

impl YakImportVisitor {
  pub fn new() -> Self {
    Self {
      yak_library_imports: HashMap::new(),
      yak_utilities: HashMap::new(),
      yak_css_idents: HashSet::new(),
    }
  }

  /// Check if the current AST has imports to the next-yak library
  pub fn is_using_next_yak(&self) -> bool {
    !self.yak_library_imports.is_empty()
  }

  /// Get the name of the used next-yak library function
  /// e.g. styled.button`color: red;` -> styled
  pub fn get_yak_library_function_name(&self, n: &TaggedTpl) -> Option<String> {
    if !self.is_using_next_yak() {
      return None;
    }

    fn get_root_ident(expr: &Expr) -> Option<&Ident> {
      match expr {
        Expr::Ident(ident) => Some(ident),
        Expr::Member(MemberExpr { obj, .. }) => get_root_ident(obj),
        Expr::Call(CallExpr { callee, .. }) => match callee {
          Callee::Expr(expr) => get_root_ident(expr),
          _ => None,
        },
        _ => None,
      }
    }

    if let Some(ident) = get_root_ident(&n.tag) {
      self
        .yak_library_imports
        .get(&ident.sym.to_string())
        .cloned()
    } else {
      None
    }
  }

  /// Returns the utility function identifier
  pub fn get_yak_utility_ident(&mut self, name: String) -> Ident {
    if !UTILITIES.contains(&name.as_str()) {
      panic!("Utility function not found: {}", name);
    }
    if let Some(ident) = self.yak_utilities.get(&name) {
      return ident.clone();
    } else {
      let prefixed_name = format!("__yak_{}", name);
      let ident = Ident::new(prefixed_name.clone().into(), DUMMY_SP);
      self.yak_utilities.insert(prefixed_name, ident.clone());
      return ident;
    }
  }

  /// Get the import declaration specifiers for all used utility functions
  pub fn get_yak_utility_import_declaration(&self) -> Vec<ImportSpecifier> {
    self
      .yak_utilities
      .iter()
      .map(|(_, imported)| {
        ImportSpecifier::Named(ImportNamedSpecifier {
          span: DUMMY_SP,
          local: imported.clone(),
          imported: None,
          is_type_only: false,
        })
      })
      .collect()
  }
}

impl VisitMut for YakImportVisitor {
  /// Visit the import declaration and store the imported names
  /// That way we know if `styled`, `css` is imported from "next-yak"
  /// and we can transpile their usages
  fn visit_mut_import_decl(&mut self, import_decl: &mut ImportDecl) {
    if import_decl.src.value == "next-yak" {
      // Compiling will change the way the utils are called
      // Therefore the types are split between the user usage
      // and how the library is called internally
      import_decl.src.value = "next-yak/internal".into();
      import_decl.src.raw = None;
      // Store the local name of the imported function
      for specifier in &import_decl.specifiers {
        if let ImportSpecifier::Named(named) = specifier {
          let imported = match &named.imported {
            Some(ModuleExportName::Ident(i)) => i.sym.to_string(),
            None => named.local.sym.to_string(),
            _ => continue,
          };
          let local = named.local.sym.to_string();
          self.yak_library_imports.insert(local, imported.clone());
          if imported == "css" {
            self.yak_css_idents.insert(named.local.to_string());
          }
        }
      }
    }
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use swc_core::ecma::transforms::testing::test_transform;
  use swc_core::ecma::visit::as_folder;

  #[test]
  fn test_yak_import_visitor_no_yak() {
    let mut visitor = YakImportVisitor::new();
    let code = r#"
    import { primary } from "./theme";
    const duration = 34;
    export function run(primary = "red") {
      console.log(primary, duration);
    }
    "#;
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      code,
      code,
      true,
    );
    assert_eq!(visitor.is_using_next_yak(), false);
  }

  #[test]
  fn test_yak_import_visitor() {
    let mut visitor = YakImportVisitor::new();
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      r#"
        import { styled, css } from "next-yak";
        import { styled as renamedStyled, keyframes } from "next-yak";
        import { primary } from "./theme";
        const duration = 34;
        export function run(primary = "red") {
            console.log(primary, duration);
        }
    "#,
      r#"
        import { styled, css } from "next-yak/internal";
        import { styled as renamedStyled, keyframes } from "next-yak/internal";
        import { primary } from "./theme";
        const duration = 34;
        export function run(primary = "red") {
            console.log(primary, duration);
        }
    "#,
      true,
    );
    assert_eq!(visitor.is_using_next_yak(), true);
  }
}
