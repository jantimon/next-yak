use swc_core::{common::DUMMY_SP, ecma::ast::*};

/// Adds a suffix to an expression
/// e.g: `({$foo}) => $foo` -> __yak_add_suffix_to_expr(({$foo}) => $foo, "-suffix")
pub fn add_suffix_to_expr(expr: Expr, helper: Ident, suffix: String) -> Expr {
  // Otherwise, replace the expression with a call to the utility function
  Expr::Call(CallExpr {
    span: DUMMY_SP,
    callee: Callee::Expr(helper.into()),
    args: vec![
      expr.into(),
      Expr::Lit(Lit::Str(Str {
        span: DUMMY_SP,
        value: suffix.into(),
        raw: None,
      }))
      .into(),
    ],
    type_args: None,
  })
}
