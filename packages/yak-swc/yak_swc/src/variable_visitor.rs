use std::collections::HashMap;
use swc_core::ecma::visit::VisitMutWith;
use swc_core::ecma::{ast::*, visit::VisitMut};

pub struct VariableVisitor {
  variables: HashMap<String, Box<Expr>>,
  imports: HashMap<String, String>,
}

/// Visitor implementation to gather all variable declarations
/// and their values from the AST
impl VariableVisitor {
  pub fn new() -> Self {
    Self {
      variables: HashMap::new(),
      imports: HashMap::new(),
    }
  }

  /// Returns the value of a variable if it exists
  pub fn get_variable(&mut self, name: &str) -> Option<String> {
    if let Some(expr) = self.variables.get_mut(name) {
      if let Expr::Lit(lit) = &mut **expr {
        if let Lit::Str(str_) = lit {
          return Some(str_.value.to_string());
        } else if let Lit::Num(num) = lit {
          return Some(num.value.to_string());
        }
      }
    }
    return None;
  }

  // Returns the source of an imported variable if it exists
  pub fn get_imported_variable(&mut self, name: &str) -> Option<String> {
    if let Some(src) = self.imports.get(name) {
      return Some(src.to_string());
    }
    return None;
  }
}

impl VisitMut for VariableVisitor {
  /// Scans the AST for variable declarations and extracts the variable names
  fn visit_mut_var_decl(&mut self, var: &mut VarDecl) {
    var.decls.iter_mut().for_each(|decl| {
      if let Pat::Ident(ident) = &decl.name {
        if let Some(init) = &decl.init {
          self.variables.insert(ident.sym.to_string(), init.clone());
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
          .insert(named.local.sym.to_string(), import.src.value.to_string());
      }
    });
    import.visit_mut_children_with(self);
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use swc_core::ecma::transforms::testing::test_transform;
  use swc_core::ecma::visit::as_folder;

  #[test]
  fn test_import_visitor() {
    let mut visitor = VariableVisitor::new();
    let code = r#"
    import { primary } from "./theme";
    const duration = 34;
    export function run() {
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
    let primary = &visitor.get_imported_variable("primary");
    let duration = &visitor.get_variable("duration");
    assert_eq!(*primary, Some("./theme".to_string()));
    assert_eq!(*duration, Some("34".to_string()));
  }
}
