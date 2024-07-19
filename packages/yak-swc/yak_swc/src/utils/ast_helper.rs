use std::collections::HashMap;

use itertools::Itertools;
use swc_core::{common::DUMMY_SP, ecma::ast::*, plugin::errors::HANDLER};

/// Convert a HashMap to an Object expression
pub fn expr_hash_map_to_object(values: HashMap<String, Expr>) -> Expr {
  let properties = values
    .into_iter()
    .sorted_by_key(|(key, _)| key.clone())
    .map(|(key, value)| {
      PropOrSpread::Prop(Box::new(
        KeyValueProp {
          key: PropName::Str(key.into()),
          value: Box::new(value),
        }
        .into(),
      ))
    })
    .collect::<Vec<_>>();

  Expr::Object(ObjectLit {
    span: Default::default(),
    props: properties,
  })
}

/// Convert a member expression to a root identifier and a string vector of properties
/// e.g. `foo.bar.baz` will return `(foo#0, ["foo", "bar", "baz"])`
pub fn member_expr_to_strings(member_expr: &MemberExpr) -> Option<(Ident, Vec<String>)> {
  let mut props = vec![];
  if let Some(ident) = member_expr.clone().prop.ident() {
    props.push(ident.sym.to_string());
  } else if let Some(computed) = member_expr.clone().prop.computed() {
    if let Expr::Lit(Lit::Str(str)) = *computed.expr.clone() {
      props.push(str.value.to_string());
    } else {
      return None;
    }
  } else {
    return None;
  }
  match *member_expr.obj.clone() {
    Expr::Ident(ident) => {
      let root_ident = ident;
      props.insert(0, root_ident.sym.to_string());
      Some((root_ident.clone(), props))
    }
    Expr::Member(member) => {
      let result = member_expr_to_strings(&member)?;
      let (root_ident, mut nested_props) = result;
      nested_props.extend(props);
      nested_props.insert(0, root_ident.sym.to_string());
      Some((root_ident, nested_props))
    }
    _ => None,
  }
}

/// String to MemberProp
pub fn create_member_prop_from_string(s: String) -> MemberProp {
  // if the string contains characters that are not allowed in an identifier
  // "with space" -> foo["with space"]
  if s.contains(|c: char| !c.is_alphanumeric() && c != '_' && c != '$')
    || s.starts_with(|c: char| c.is_ascii_digit())
  {
    MemberProp::Computed(ComputedPropName {
      span: DUMMY_SP,
      expr: Box::new(Expr::Lit(Lit::Str(Str {
        span: DUMMY_SP,
        value: s.into(),
        raw: None,
      }))),
    })
  }
  // otherwise "bar" -> foo.bar
  else {
    MemberProp::Ident(Ident::new(s.into(), DUMMY_SP))
  }
}

/// Extracts the identifier and member expression parts from an expression
/// There are two use cases:
/// 1. Member expressions (e.g., `colors.primary`) -> Some((colors#0, ["colors", "primary"]))
/// 2. Simple identifiers (e.g., `primaryColor`) -> Some((primaryColor#0, ["primaryColor"]))
pub fn extract_ident_and_parts(expr: &Expr) -> Option<(Ident, Vec<String>)> {
  match &expr {
    Expr::Member(member) => member_expr_to_strings(&member)
      .map(|(ident, parts)| (ident, parts))
      .or_else(|| {
        HANDLER.with(|handler| {
          handler
            .struct_span_err(member.span, "Could not parse member expression")
            .emit();
        });
        None
      }),
    Expr::Ident(ident) => Some((ident.clone(), vec![ident.sym.to_string()])),
    _ => None,
  }
}

pub struct TemplateIterator<'a> {
  tpl: &'a mut Tpl,
  tpl_clone: Tpl,
  current: usize,
}

pub struct TemplatePart<'a> {
  pub quasi: &'a mut TplElement,
  pub expr: Option<&'a mut Box<Expr>>,
  pub next_quasi: Option<&'a TplElement>,
  pub is_last: bool,
}

impl<'a> TemplateIterator<'a> {
  pub fn new(tpl: &'a mut Tpl) -> Self {
    Self {
      tpl_clone: tpl.clone(),
      tpl,
      current: 0,
    }
  }

  pub fn next(&mut self) -> Option<TemplatePart<'_>> {
    if self.current >= self.tpl.quasis.len() {
      return None;
    }
    let quasi_count = self.tpl.quasis.len();
    let is_last = self.current == quasi_count - 1;
    let next_quasi = if !is_last {
      Some(&self.tpl_clone.quasis[self.current + 1])
    } else {
      None
    };
    let quasi = &mut self.tpl.quasis[self.current];

    let expr = self.tpl.exprs.get_mut(self.current);
    self.current += 1;

    Some(TemplatePart {
      quasi,
      expr,
      next_quasi,
      is_last,
    })
  }
}
