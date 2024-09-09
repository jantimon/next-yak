use rustc_hash::{FxHashMap, FxHashSet};
use swc_core::atoms::Atom;
use swc_core::{
  common::DUMMY_SP,
  ecma::{ast::*, visit::VisitMut},
};

#[derive(Debug)]
/// Visitor implementation to gather all names imported from "next-yak"
/// Side effect: converts the import source from "next-yak" to "next-yak/internal"
pub struct YakImportVisitor {
  /// Imports from "next-yak"
  /// Local to Imported mapping
  yak_library_imports: FxHashMap<Id, Id>,
  /// Utilities used from "next-yak/internal"
  /// e.g. unitPostFix, mergeCssProp
  yak_utilities: FxHashMap<String, Ident>,
  /// Local Identifiers for the next-yak css function \
  /// Most of the time it is just `css#0` for `import { css } from "next-yak"` \
  /// but it might also contain renamings like `import { css as css_ } from "next-yak"`
  pub yak_css_idents: FxHashSet<Id>,
}

const UTILITIES: &[&str] = &["unitPostFix", "mergeCssProp"];

impl YakImportVisitor {
  pub fn new() -> Self {
    Self {
      yak_library_imports: FxHashMap::default(),
      yak_utilities: FxHashMap::default(),
      yak_css_idents: FxHashSet::default(),
    }
  }

  /// Check if the current AST has imports to the next-yak library
  pub fn is_using_next_yak(&self) -> bool {
    !self.yak_library_imports.is_empty()
  }

  /// Get the name of the used next-yak library function
  /// e.g. styled.button`color: red;` -> styled
  pub fn get_yak_library_function_name(&self, n: &TaggedTpl) -> Option<Atom> {
    if !self.is_using_next_yak() {
      return None;
    }

    fn get_root_ident(expr: &Expr) -> Option<Id> {
      match expr {
        Expr::Ident(ident) => Some(ident.to_id()),
        Expr::Member(MemberExpr { obj, .. }) => get_root_ident(obj),
        Expr::Call(CallExpr {
          callee: Callee::Expr(expr),
          ..
        }) => get_root_ident(expr),
        _ => None,
      }
    }

    if let Some(id) = get_root_ident(&n.tag) {
      // Return the original name
      // e.g. import { styled as renamedStyled } from "next-yak" -> styled
      self.yak_library_imports.get(&id).map(|id| id.0.clone())
    } else {
      None
    }
  }

  /// Get the name of the used next-yak library function
  /// e.g. atom("flex") -> atom
  pub fn get_yak_library_name_for_ident(&self, id: &Id) -> Option<Atom> {
    if !self.is_using_next_yak() {
      return None;
    }
    return self.yak_library_imports.get(id).map(|id| id.0.clone());
  }

  /// Returns the utility function identifier
  pub fn get_yak_utility_ident(&mut self, name: String) -> Ident {
    if !UTILITIES.contains(&name.as_str()) {
      panic!("Utility function not found: {}", name);
    }
    if let Some(ident) = self.yak_utilities.get(&name) {
      ident.clone()
    } else {
      let prefixed_name = format!("__yak_{}", name);
      let ident = Ident::new(prefixed_name.clone().into(), DUMMY_SP);
      self.yak_utilities.insert(prefixed_name, ident.clone());
      ident
    }
  }

  /// Get the import declaration specifiers for all used utility functions
  pub fn get_yak_utility_import_declaration(&self) -> Vec<ImportSpecifier> {
    self
      .yak_utilities
      .values()
      .map(|imported| {
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
            Some(ModuleExportName::Ident(i)) => i.to_id(),
            None => named.local.to_id(),
            _ => continue,
          };
          let local = named.local.to_id();
          self.yak_library_imports.insert(local, imported.clone());
          if imported.0 == "css" {
            self.yak_css_idents.insert(named.local.to_id());
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
