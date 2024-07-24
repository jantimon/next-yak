use rustc_hash::FxHashMap;
use swc_core::atoms::Atom;
use swc_core::ecma::visit::VisitMutWith;
use swc_core::ecma::{ast::*, visit::VisitMut};

#[derive(PartialEq, Debug, Clone)]
#[repr(u8)]
pub enum ImportSourceType {
  /// Imports from normal typescript files
  /// Normal files are only statically analyzed
  Normal = 0,
  /// Imports from *.yak.ts or *.yak.tsx files
  /// Yak files are executed during the build process
  Yak = 1,
}

#[derive(Debug)]
/// Visitor implementation to gather all variable declarations
/// and their values from the AST
pub struct VariableVisitor {
  variables: FxHashMap<Id, Box<Expr>>,
  imports: FxHashMap<Id, Atom>,
}

impl VariableVisitor {
  pub fn new() -> Self {
    Self {
      variables: FxHashMap::default(),
      imports: FxHashMap::default(),
    }
  }

  /// Returns the value of a variable if it exists
  /// Use id.to_string() (including the #0 suffix) to get the variable name
  /// Using sym.to_string() will always return None
  pub fn get_variable(&mut self, name: &Id) -> Option<String> {
    if let Some(expr) = self.variables.get_mut(name) {
      if let Expr::Lit(lit) = &mut **expr {
        if let Lit::Str(str_) = lit {
          return Some(str_.value.to_string());
        } else if let Lit::Num(num) = lit {
          return Some(num.value.to_string());
        }
      }
    }
    None
  }

  /// Returns the source of an imported variable if it exists
  pub fn get_imported_variable(&mut self, name: &Id) -> Option<(ImportSourceType, String)> {
    if let Some(src) = self.imports.get(name) {
      let src = src.to_string();
      let source_type = if src.ends_with(".yak") {
        ImportSourceType::Yak
      } else {
        ImportSourceType::Normal
      };
      return Some((source_type, src.to_string()));
    }
    None
  }
}

impl VisitMut for VariableVisitor {
  /// Scans the AST for variable declarations and extracts the variable names
  fn visit_mut_var_decl(&mut self, var: &mut VarDecl) {
    var.decls.iter_mut().for_each(|decl| {
      if let Pat::Ident(ident) = &decl.name {
        if let Some(init) = &decl.init {
          self.variables.insert(ident.to_id(), init.clone());
        }
      }
    });
    var.visit_mut_children_with(self);
  }
  /// Scans the AST for import declarations and extracts the imported names
  fn visit_mut_import_decl(&mut self, import: &mut ImportDecl) {
    import.specifiers.iter_mut().for_each(|specifier| {
      if let ImportSpecifier::Named(named) = specifier {
        self
          .imports
          .insert(named.local.to_id(), import.src.value.clone());
      }
    });
    import.visit_mut_children_with(self);
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use swc::atoms::Atom;
  use swc_core::common::SyntaxContext;
  use swc_core::ecma::transforms::testing::test_transform;
  use swc_core::ecma::visit::as_folder;

  #[test]
  fn test_import_visitor() {
    let mut visitor = VariableVisitor::new();
    let code = r#"
    import { primary } from "./theme";
    import { mixin } from "./constants.yak";
    const duration = 34;
    export function run(primary = "red") {
      console.log(primary, duration, mixin);
    }
    "#;
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      code,
      code,
      true,
    );
    let primary = &visitor.get_imported_variable(&Id::from((
      Atom::from("primary"),
      SyntaxContext::from_u32(0),
    )));
    assert_eq!(
      *primary,
      Some((ImportSourceType::Normal, "./theme".to_string()))
    );
    let mixin =
      &visitor.get_imported_variable(&Id::from((Atom::from("mixin"), SyntaxContext::from_u32(0))));
    assert_eq!(
      *mixin,
      Some((ImportSourceType::Yak, "./constants.yak".to_string()))
    );
    let duration = &visitor.get_variable(&Id::from((
      Atom::from("duration"),
      SyntaxContext::from_u32(0),
    )));
    assert_eq!(*duration, Some("34".to_string()));
  }
}
