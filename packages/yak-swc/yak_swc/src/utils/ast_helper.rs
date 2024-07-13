use std::collections::HashMap;

use itertools::Itertools;
use swc_core::{common::DUMMY_SP, ecma::ast::*};

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

/// String to MemberProp
pub fn create_member_prop_from_string(s: String) -> MemberProp {
  // if the string contains characters that are not allowed in an identifier
  // use a string literal instead
  if s.contains(|c: char| !c.is_alphanumeric() && c != '_' && c != '$')
    || s.starts_with(|c: char| c.is_ascii_digit())
  {
    return MemberProp::Computed(ComputedPropName {
      span: DUMMY_SP,
      expr: Box::new(Expr::Lit(Lit::Str(Str {
        span: DUMMY_SP,
        value: s.into(),
        raw: None,
      }))),
    });
  }
  return MemberProp::Ident(Ident::new(s.into(), DUMMY_SP));
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
