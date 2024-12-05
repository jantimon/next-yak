use rustc_hash::{FxHashMap, FxHashSet};
use swc_core::atoms::Atom;
use swc_core::ecma::visit::Fold;
use swc_core::ecma::visit::VisitMutWith;
use swc_core::{
  common::DUMMY_SP,
  ecma::{ast::*, visit::VisitMut},
};

#[derive(Debug)]
/// Visitor implementation to gather all names imported from "next-yak"
/// Side effect: converts the import source from "next-yak" to "next-yak/internal"
pub struct YakImports {
  /// Utilities used from "next-yak/internal"
  /// e.g. unitPostFix, mergeCssProp
  yak_utilities: FxHashMap<String, Ident>,
  /// Imports from "next-yak"
  /// Local to Imported mapping
  yak_library_imports: FxHashMap<Id, Id>,
  /// Local Identifiers for the next-yak css function \
  /// Most of the time it is just `css#0` for `import { css } from "next-yak"` \
  /// but it might also contain renamings like `import { css as css_ } from "next-yak"`
  yak_css_idents: FxHashSet<Id>,
  /// Local Identifiers for the next-yak keyframes function \
  /// Most of the time it is just `keyframes#0` for `import { keyframes } from "next-yak"` \
  /// but it might also contain renamings like `import { keyframes as keyframes_ } from "next-yak"`
  yak_keyframes_idents: FxHashSet<Id>,
}

pub fn initialize_yak_imports(program: &mut Program) -> YakImports {
  let mut yak_import_visitor = YakImportVisitor::new();
  program.visit_mut_children_with(&mut yak_import_visitor);
  return YakImports::new(
    yak_import_visitor.yak_library_imports,
    yak_import_visitor.yak_css_idents,
    yak_import_visitor.yak_keyframes_idents,
  );
}

const UTILITIES: &[&str] = &["unitPostFix", "mergeCssProp"];

impl YakImports {
  pub fn new(
    yak_library_imports: FxHashMap<Id, Id>,
    yak_css_idents: FxHashSet<Id>,
    yak_keyframes_idents: FxHashSet<Id>,
  ) -> Self {
    Self {
      yak_utilities: FxHashMap::default(),
      yak_library_imports,
      yak_css_idents,
      yak_keyframes_idents,
    }
  }

  pub fn yak_css_idents(&self) -> &FxHashSet<Id> {
    &self.yak_css_idents
  }

  pub fn yak_library_imports(&self) -> &FxHashMap<Id, Id> {
    &self.yak_library_imports
  }

  pub fn yak_keyframes_idents(&self) -> &FxHashSet<Id> {
    &self.yak_keyframes_idents
  }

  pub fn yak_utilities(&self) -> &FxHashMap<String, Ident> {
    &self.yak_utilities
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
      let ident = Ident::from(prefixed_name.clone());
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

struct YakImportVisitor {
  /// Imports from "next-yak"
  /// Local to Imported mapping
  pub yak_library_imports: FxHashMap<Id, Id>,
  /// Local Identifiers for the next-yak css function \
  /// Most of the time it is just `css#0` for `import { css } from "next-yak"` \
  /// but it might also contain renamings like `import { css as css_ } from "next-yak"`
  pub yak_css_idents: FxHashSet<Id>,
  /// Local Identifiers for the next-yak keyframes function \
  /// Most of the time it is just `keyframes#0` for `import { keyframes } from "next-yak"` \
  /// but it might also contain renamings like `import { keyframes as keyframes_ } from "next-yak"`
  pub yak_keyframes_idents: FxHashSet<Id>,
}

impl YakImportVisitor {
  pub fn new() -> Self {
    Self {
      yak_library_imports: FxHashMap::default(),
      yak_css_idents: FxHashSet::default(),
      yak_keyframes_idents: FxHashSet::default(),
    }
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
          } else if imported.0 == "keyframes" {
            self.yak_keyframes_idents.insert(named.local.to_id());
          }
        }
      }
    }
  }
}

impl Fold for YakImportVisitor {}

#[cfg(test)]
mod tests {
  use super::*;
  use swc_core::atoms::atom;
  use swc_core::common::SyntaxContext;
  use swc_core::ecma::transforms::testing::test_transform;
  use swc_core::ecma::visit::visit_mut_pass;

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
      Some(true),
      |_| visit_mut_pass(&mut visitor),
      code,
      code,
    );
    assert_eq!(visitor.is_using_next_yak(), false);
  }

  #[test]
  fn test_yak_import_visitor() {
    let mut visitor = YakImportVisitor::new();
    test_transform(
      Default::default(),
      Some(true),
      |_| visit_mut_pass(&mut visitor),
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
    );
    assert_eq!(visitor.is_using_next_yak(), true);
  }

  #[test]
  fn test_yak_import_visitor_css_ident() {
    let mut visitor = YakImportVisitor::new();
    test_transform(
      Default::default(),
      Some(true),
      |_| visit_mut_pass(&mut visitor),
      r#"
        import { css } from "next-yak";
        const styles = css`color: red;`;
      "#,
      r#"
        import { css } from "next-yak/internal";
        const styles = css`color: red;`;
      "#,
    );
    assert!(visitor
      .yak_css_idents
      .contains(&Id::from((atom!("css"), SyntaxContext::empty()))));
  }

  #[test]
  fn test_yak_import_visitor_renamed_css_ident() {
    let mut visitor = YakImportVisitor::new();
    test_transform(
      Default::default(),
      Some(true),
      |_| visit_mut_pass(&mut visitor),
      r#"
        import { css as myCss } from "next-yak";
        const styles = myCss`color: red;`;
      "#,
      r#"
        import { css as myCss } from "next-yak/internal";
        const styles = myCss`color: red;`;
      "#,
    );
    assert!(visitor
      .yak_css_idents
      .contains(&Id::from((atom!("myCss"), SyntaxContext::empty()))));
  }

  #[test]
  fn test_yak_import_visitor_keyframes_ident() {
    let mut visitor = YakImportVisitor::new();
    test_transform(
      Default::default(),
      Some(true),
      |_| visit_mut_pass(&mut visitor),
      r#"
        import { keyframes } from "next-yak";
        const animation = keyframes`from { opacity: 0; } to { opacity: 1; }`;
      "#,
      r#"
        import { keyframes } from "next-yak/internal";
        const animation = keyframes`from { opacity: 0; } to { opacity: 1; }`;
      "#,
    );
    assert!(visitor
      .yak_keyframes_idents
      .contains(&Id::from((atom!("keyframes"), SyntaxContext::empty()))));
  }

  #[test]
  fn test_yak_import_visitor_renamed_keyframes_ident() {
    let mut visitor = YakImportVisitor::new();
    test_transform(
      Default::default(),
      Some(true),
      |_| visit_mut_pass(&mut visitor),
      r#"
        import { keyframes as myKeyframes } from "next-yak";
        const animation = myKeyframes`from { opacity: 0; } to { opacity: 1; }`;
      "#,
      r#"
        import { keyframes as myKeyframes } from "next-yak/internal";
        const animation = myKeyframes`from { opacity: 0; } to { opacity: 1; }`;
      "#,
    );
    assert!(visitor
      .yak_keyframes_idents
      .contains(&Id::from((atom!("myKeyframes"), SyntaxContext::empty()))));
  }

  #[test]
  fn test_yak_import_visitor_utility_ident() {
    let mut visitor = YakImportVisitor::new();
    let ident = visitor.get_yak_utility_ident("unitPostFix".to_string());
    assert_eq!(ident.sym, "__yak_unitPostFix");
    let ident = visitor.get_yak_utility_ident("mergeCssProp".to_string());
    assert_eq!(ident.sym, "__yak_mergeCssProp");
  }
}
