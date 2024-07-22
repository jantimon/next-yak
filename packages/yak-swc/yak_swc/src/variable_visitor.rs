use rustc_hash::FxHashMap;
use swc_core::ecma::visit::VisitMutWith;
use swc_core::ecma::{ast::*, visit::VisitMut};

#[derive(Debug)]
/// Visitor implementation to gather all variable declarations
/// and their values from the AST
pub struct VariableVisitor {
  variables: FxHashMap<Id, Box<Expr>>,
  imports: FxHashMap<Id, String>,
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

  // Returns the source of an imported variable if it exists
  /// Use id.to_string() (including the #0 suffix) to get the variable name
  /// Using sym.to_string() will always return None
  pub fn get_imported_variable(&mut self, name: &Id) -> Option<String> {
    if let Some(src) = self.imports.get(name) {
      return Some(src.to_string());
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
          .insert(named.local.to_id(), import.src.value.to_string());
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
    let primary = &visitor.get_imported_variable(&Id::from((
      Atom::from("primary"),
      SyntaxContext::from_u32(0),
    )));
    let duration = &visitor.get_variable(&Id::from((
      Atom::from("duration"),
      SyntaxContext::from_u32(0),
    )));
    assert_eq!(*primary, Some("./theme".to_string()));
    assert_eq!(*duration, Some("34".to_string()));
  }
}
