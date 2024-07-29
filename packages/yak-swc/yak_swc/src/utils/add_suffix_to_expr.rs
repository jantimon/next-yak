use swc_core::{common::DUMMY_SP, ecma::ast::*};

/// Adds a suffix to an expression
/// e.g: `({$foo}) => $foo` -> __yak_add_suffix_to_expr(({$foo}) => $foo, "-suffix")
pub fn add_suffix_to_expr(expr: Expr, helper: Ident, suffix: String) -> Expr {
  // Try to merge the suffix into the expression
  if let Some(expr) = merge_suffix_into_expr(suffix.clone(), expr.clone()) {
    return expr;
  }
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

/// Try to merge a suffix right into an expression
fn merge_suffix_into_expr(suffix: String, expr: Expr) -> Option<Expr> {
  match &expr {
    // merge strings e.g. "foo" -> "foo-suffix"
    Expr::Lit(Lit::Str(str)) => Some(Expr::Lit(Lit::Str(Str {
      span: DUMMY_SP,
      value: format!("{}{}", str.value, suffix).into(),
      raw: None,
    }))),
    // merge numbers e.g. 99 -> "99-suffix"
    Expr::Lit(Lit::Num(num)) => Some(Expr::Lit(Lit::Str(Str {
      span: DUMMY_SP,
      value: format!("{}{}", num.value, suffix).into(),
      raw: None,
    }))),
    // merge binary expressions for calculations  e.g. 4 * 3 -> 4 * 3 + "-suffix"
    Expr::Bin(bin_expr)
      if matches!(
        bin_expr.op,
        BinaryOp::Add | BinaryOp::Sub | BinaryOp::Mul | BinaryOp::Div | BinaryOp::Mod
      ) =>
    {
      Some(Expr::Bin(BinExpr {
        span: DUMMY_SP,
        left: expr.clone().into(),
        op: bin_expr.op,
        right: Box::new(Expr::Lit(Lit::Str(Str {
          span: DUMMY_SP,
          value: suffix.into(),
          raw: None,
        }))),
      }))
    }
    // Otherwise it has to be replaced at runtime using a utility function
    _ => None,
  }
}
