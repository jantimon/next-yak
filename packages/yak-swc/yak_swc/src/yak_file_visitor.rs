use crate::yak_imports::YakImportVisitor;
use swc_core::atoms::atom;
use swc_core::common::Spanned;
use swc_core::ecma::ast::*;
use swc_core::ecma::visit::{VisitMut, VisitMutWith};
use swc_core::plugin::errors::HANDLER;

pub struct YakFileVisitor {
  yak_imports: YakImportVisitor,
  is_inside_css_tpl: bool,
}

/// A vistor which transform the AST of a .yak.tsx .yak.ts or .yak.js file
/// by removing the next-yak imports and converting tagged template literals
/// so that it can evaluated as a pure nodejs module
impl YakFileVisitor {
  pub fn new() -> Self {
    Self {
      yak_imports: YakImportVisitor::new(),
      is_inside_css_tpl: false,
    }
  }

  fn is_invalid_expr(&self, expr: &Expr) -> bool {
    matches!(expr, Expr::Fn(_) | Expr::Arrow(_))
  }

  fn remove_next_yak_imports(&self, module: &mut Module) {
    module.body.retain(|item| {
      if let ModuleItem::ModuleDecl(ModuleDecl::Import(import_decl)) = item {
        return &import_decl.src.value != "next-yak/internal";
      }
      true
    });
  }
}

impl VisitMut for YakFileVisitor {
  fn visit_mut_module(&mut self, module: &mut Module) {
    module.visit_mut_children_with(&mut self.yak_imports);
    if self.yak_imports.is_using_next_yak() {
      self.remove_next_yak_imports(module);
      module.visit_mut_children_with(self);
    }
  }

  fn visit_mut_expr(&mut self, expr: &mut Expr) {
    expr.visit_mut_children_with(self);
    // Convert tagged template literals to plain template literals
    if let Expr::TaggedTpl(n) = expr {
      if let Some(name) = self.yak_imports.get_yak_library_function_name(n) {
        if name == atom!("css") {
          *expr = Tpl {
            span: n.span,
            exprs: n.tpl.exprs.clone(),
            quasis: n.tpl.quasis.clone(),
          }
          .into();
        }
      }
    }
  }

  fn visit_mut_tagged_tpl(&mut self, n: &mut TaggedTpl) {
    if let Some(name) = self.yak_imports.get_yak_library_function_name(n) {
      // Right now only css template literals are allowed
      if name != atom!("css") {
        HANDLER.with(|handler| {
          handler
            .struct_span_err(
              n.span,
              "Only css template literals are allowed inside .yak files",
            )
            .emit();
        });
        return;
      }

      if self.is_inside_css_tpl {
        HANDLER.with(|handler| {
          handler
            .struct_span_err(
              n.span,
              "Nested css template literals are not allowed inside .yak files",
            )
            .emit();
        });
        return;
      }

      let before_is_inside_css_tpl = self.is_inside_css_tpl;
      self.is_inside_css_tpl = true;

      for expr in &n.tpl.exprs {
        if self.is_invalid_expr(expr) {
          HANDLER.with(|handler| {
            handler
              .struct_span_err(
                expr.span(),
                "Function expressions are not allowed in css template literals inside .yak files",
              )
              .emit();
          });
        }
      }

      n.tpl.exprs.visit_mut_with(self);
      self.is_inside_css_tpl = before_is_inside_css_tpl;
    } else {
      // Ignore unknown template literals
    }
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use swc_core::ecma::transforms::testing::test_transform;
  use swc_core::ecma::visit::as_folder;

  #[test]
  fn test_yak_file_visitor() {
    let mut visitor = YakFileVisitor::new();
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      r#"
                import { css } from "next-yak";
                export const heading = css`
                  font-size: ${20}px;
                `;
            "#,
      r#"
                export const heading = `
                  font-size: ${20}px;
                `;
            "#,
      true,
    );
  }
}
