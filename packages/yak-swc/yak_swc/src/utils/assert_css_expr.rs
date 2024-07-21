use fxhash::FxHashSet;
use swc_core::common::{Span, Spanned};
use swc_core::ecma::visit::VisitMutWith;
use swc_core::ecma::{ast::*, visit::VisitMut};
use swc_core::plugin::errors::HANDLER;

/// Checks that the entire expression and its children return a CSS expression
/// or a falsy (undefined/null/false) value
///
/// Valid:
/// css`foo:bar;`
/// () => css`foo:bar;`
/// ({$active}) => { return $active && css`foo:bar;` }
pub fn assert_css_expr(expr: &mut Expr, message: String, valid_idents: FxHashSet<String>) {
  let mut visitor = ExprVisitor::new(valid_idents);
  let error_spans = match expr {
    // if it's a function or a return statement, visit the children:
    Expr::Arrow(ArrowExpr { .. }) | Expr::Fn(FnExpr { .. }) => {
      visitor.visit_mut_expr(expr);
      visitor.error_spans
    }
    // direct css expressions are valid
    Expr::TaggedTpl(tagged_tpl) if (visitor.is_valid_expr(tagged_tpl)) => {
      vec![]
    }
    // unknown expressions are invalid
    _ => {
      vec![expr.span()]
    }
  };
  if !error_spans.is_empty() {
    for span in error_spans {
      HANDLER.with(|handler| {
        handler.struct_span_err(span, message.as_str()).emit();
      });
    }
  }
}

#[derive(Debug)]
/// Visitor implementation to walk the tree
struct ExprVisitor {
  is_returning: bool,
  valid_idents: FxHashSet<String>,
  pub error_spans: Vec<Span>,
}

impl ExprVisitor {
  pub fn new(valid_idents: FxHashSet<String>) -> Self {
    Self {
      is_returning: false,
      valid_idents,
      error_spans: vec![],
    }
  }

  /// Verifies that the expression is a template literal with a valid identifier as tag
  pub fn is_valid_expr(&self, tagged_tpl: &TaggedTpl) -> bool {
    if let Some(ident) = tagged_tpl.tag.as_ref().clone().ident() {
      return self.valid_idents.contains(ident.to_string().as_str());
    }
    false
  }
}

impl VisitMut for ExprVisitor {
  // Visit return statements
  fn visit_mut_return_stmt(&mut self, stmt: &mut ReturnStmt) {
    let is_returning = self.is_returning;
    self.is_returning = true;
    stmt.visit_mut_children_with(self);
    self.is_returning = is_returning;
  }

  // Arrow function expressions
  fn visit_mut_arrow_expr(&mut self, n: &mut ArrowExpr) {
    let is_returning = self.is_returning;
    self.is_returning = match *n.body {
      BlockStmtOrExpr::BlockStmt(_) => false,
      BlockStmtOrExpr::Expr(_) => true,
    };
    n.visit_mut_children_with(self);
    self.is_returning = is_returning;
  }

  // Check if experssion is a CSS expression
  fn visit_mut_expr(&mut self, n: &mut Expr) {
    if !self.is_returning {
      n.visit_mut_children_with(self);
      return;
    }

    match n {
      // Tagged template literal
      Expr::TaggedTpl(tagged_tpl) => {
        if !self.is_valid_expr(tagged_tpl) {
          self.error_spans.push(tagged_tpl.span);
        }
      }
      // False
      Expr::Lit(Lit::Bool(Bool { value: false, .. })) => {}
      // Null
      Expr::Lit(Lit::Null(..)) => {}
      // Binary && expression
      Expr::Bin(BinExpr {
        op: op!("&&"),
        right,
        ..
      }) => {
        // look only at the right side of the expression
        self.visit_mut_expr(right);
      }
      // Ternary expression
      Expr::Cond(CondExpr { cons, alt, .. }) => {
        // look only at the results
        self.visit_mut_expr(cons);
        self.visit_mut_expr(alt);
      }
      // SequenceExpression
      Expr::Seq(SeqExpr { exprs, .. }) => {
        // look only at the last expression
        if let Some(expr) = exprs.last_mut() {
          self.visit_mut_expr(expr);
        }
      }
      // otherwise panic:
      invalid_expr => {
        self.error_spans.push(invalid_expr.span());
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
  fn test_css_expr_visitor() {
    let mut visitor = ExprVisitor::new(["css#0".to_string()].iter().cloned().collect());
    let code = r#"
    import { css } from "next-yak";
    export const test = ({ active }) => {
      return active ? css`foo:bar;`: false;
    }
    "#;
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      code,
      code,
      false,
    );
    assert_eq!(visitor.error_spans, []);
  }

  #[test]
  fn test_css_expr_visitor_number() {
    let mut visitor = ExprVisitor::new(["css#0".to_string()].iter().cloned().collect());
    let code = r#"
    import { css } from "next-yak";
    export const test = ({ active }) => {
      return active ? css`foo:bar;`: 42;
    }
    "#;
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      code,
      code,
      false,
    );
    // Has error because 42 is not a valid CSS expression
    assert_eq!(visitor.error_spans.len(), 1);
  }

  #[test]
  fn test_css_expr_visitor_true() {
    let mut visitor = ExprVisitor::new(["css#0".to_string()].iter().cloned().collect());
    let code = r#"
    import { css } from "next-yak";
    export const test = ({ active }) => {
      return 4 && true;
    }
    "#;
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      code,
      code,
      false,
    );
    // Has error because true is not a valid CSS expression
    assert_eq!(visitor.error_spans.len(), 1);
  }

  #[test]
  fn test_css_expr_visitor_call_expr() {
    let mut visitor = ExprVisitor::new(["css#0".to_string()].iter().cloned().collect());
    let code = r#"
    import { css } from "next-yak";
    export const test = ({ active }) => {
      return active ? css`foo:bar;`: foo();
    }
    "#;
    test_transform(
      Default::default(),
      |_| as_folder(&mut visitor),
      code,
      code,
      false,
    );
    // Has error because foo() is not a valid CSS expression
    assert_eq!(visitor.error_spans.len(), 1);
  }
}
