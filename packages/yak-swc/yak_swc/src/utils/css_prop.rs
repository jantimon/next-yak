use swc_core::{
  common::{Span, DUMMY_SP},
  ecma::ast::{
    CallExpr, Callee, Expr, ExprOrSpread, Ident, JSXAttr, JSXAttrName, JSXAttrOrSpread,
    JSXAttrValue, JSXExpr, JSXOpeningElement, KeyValueProp, ObjectLit, Prop, PropName,
    PropOrSpread, SpreadElement,
  },
  plugin::errors::HANDLER,
};

#[derive(Debug)]
pub struct CSSProp {
  index: usize,
  relevant_props_indices: Vec<usize>,
}

impl CSSProp {
  pub fn transform(&self, opening_element: &mut JSXOpeningElement, merge_ident: &Ident) {
    let result: Result<_, TransformError> = (|| {
      let value = opening_element.attrs.remove(self.index);

      let (merge_call, insert_index) = if self.relevant_props_indices.is_empty() {
        (
          Self::extract_css_expr(&value, opening_element.span)?,
          self.index,
        )
      } else {
        let removed_attrs: Vec<_> = self
          .relevant_props_indices
          .iter()
          .rev()
          .map(|&index| {
            let adjusted_index = if index > self.index { index - 1 } else { index };
            opening_element.attrs.remove(adjusted_index)
          })
          .collect();
        let mapped_props = Self::map_props(&removed_attrs)?;
        let css_expr = Self::extract_css_expr(&value, opening_element.span)?;
        (
          Self::create_merge_call(&mapped_props, css_expr, merge_ident),
          opening_element.attrs.len(),
        )
      };

      let spread_attr = JSXAttrOrSpread::SpreadElement(SpreadElement {
        dot3_token: DUMMY_SP,
        expr: merge_call,
      });
      opening_element.attrs.insert(insert_index, spread_attr);
      Ok(())
    })();

    if let Err(err) = result {
      HANDLER.with(|handler| {
        handler.span_err(err.span(), err.message());
      });
    }
  }

  fn extract_css_expr(attr: &JSXAttrOrSpread, span: Span) -> Result<Box<Expr>, TransformError> {
    match attr {
      JSXAttrOrSpread::JSXAttr(jsx_attr) => jsx_attr
        .value
        .as_ref()
        .ok_or(TransformError::InvalidCSSAttribute(span))
        .and_then(|value| match value {
          JSXAttrValue::JSXExprContainer(container) => match &container.expr {
            JSXExpr::Expr(expr) => Ok(Box::new(Expr::Call(CallExpr {
              span: DUMMY_SP,
              callee: Callee::Expr(expr.clone()),
              args: vec![ExprOrSpread {
                spread: None,
                expr: Box::new(Expr::Object(ObjectLit {
                  span: DUMMY_SP,
                  props: vec![],
                })),
              }],
              type_args: None,
            }))),
            _ => Err(TransformError::InvalidCSSAttribute(container.span)),
          },
          _ => Err(TransformError::InvalidCSSAttribute(span)),
        }),
      JSXAttrOrSpread::SpreadElement(_) => Err(TransformError::UnsupportedSpreadElement(span)),
    }
  }

  fn map_props(props: &[JSXAttrOrSpread]) -> Result<Vec<PropOrSpread>, TransformError> {
    props
      .iter()
      .rev()
      .map(|prop| match prop {
        JSXAttrOrSpread::JSXAttr(attr) => Self::map_jsx_attr(attr),
        JSXAttrOrSpread::SpreadElement(spread) => Ok(PropOrSpread::Spread(spread.clone())),
      })
      .collect()
  }

  fn map_jsx_attr(attr: &JSXAttr) -> Result<PropOrSpread, TransformError> {
    match &attr.name {
      JSXAttrName::Ident(ident) => Ok(PropOrSpread::Prop(Box::new(Prop::KeyValue(KeyValueProp {
        key: PropName::Ident(ident.clone()),
        value: Self::extract_value(&attr.value, attr.span)?,
      })))),
      _ => Err(TransformError::InvalidJSXAttribute(attr.span)),
    }
  }

  fn extract_value(value: &Option<JSXAttrValue>, span: Span) -> Result<Box<Expr>, TransformError> {
    value
      .as_ref()
      .ok_or(TransformError::MissingAttributeValue(span))
      .and_then(|v| match v {
        JSXAttrValue::Lit(lit) => Ok(Box::new(Expr::Lit(lit.clone()))),
        JSXAttrValue::JSXExprContainer(container) => match &container.expr {
          JSXExpr::Expr(expr) => Ok(expr.clone()),
          JSXExpr::JSXEmptyExpr(_) => Err(TransformError::InvalidJSXEmptyExpr(container.span)),
        },
        _ => Err(TransformError::UnsupportedAttributeValue(span)),
      })
  }

  fn create_merge_call(
    mapped_props: &[PropOrSpread],
    expr: Box<Expr>,
    merge_ident: &Ident,
  ) -> Box<Expr> {
    Box::new(Expr::Call(CallExpr {
      span: DUMMY_SP,
      callee: Callee::Expr(Box::new(Expr::Ident(merge_ident.clone()))),
      args: vec![
        ExprOrSpread {
          spread: None,
          expr: Box::new(Expr::Object(ObjectLit {
            span: DUMMY_SP,
            props: mapped_props.to_vec(),
          })),
        },
        ExprOrSpread { spread: None, expr },
      ],
      type_args: None,
    }))
  }
}

pub trait HasCSSProp {
  fn has_css_prop(&self) -> Option<CSSProp>;
}

impl HasCSSProp for JSXOpeningElement {
  fn has_css_prop(&self) -> Option<CSSProp> {
    let mut css_index = None;
    let mut relevant_props = Vec::new();

    for (index, attr) in self.attrs.iter().enumerate() {
      match attr {
        JSXAttrOrSpread::JSXAttr(attr) => {
          if let JSXAttrName::Ident(ident) = &attr.name {
            match ident.sym.as_ref() {
              "css" => css_index = Some(index),
              "className" | "style" => relevant_props.push(index),
              _ => {}
            }
          }
        }
        JSXAttrOrSpread::SpreadElement(_) => relevant_props.push(index),
      }
    }

    css_index.map(|index| CSSProp {
      index,
      relevant_props_indices: relevant_props,
    })
  }
}

#[derive(Debug)]
pub enum TransformError {
  InvalidCSSAttribute(Span),
  UnsupportedSpreadElement(Span),
  InvalidJSXAttribute(Span),
  MissingAttributeValue(Span),
  InvalidJSXEmptyExpr(Span),
  UnsupportedAttributeValue(Span),
}

impl TransformError {
  fn span(&self) -> Span {
    match self {
      TransformError::InvalidCSSAttribute(span)
      | TransformError::UnsupportedSpreadElement(span)
      | TransformError::InvalidJSXAttribute(span)
      | TransformError::MissingAttributeValue(span)
      | TransformError::InvalidJSXEmptyExpr(span)
      | TransformError::UnsupportedAttributeValue(span) => *span,
    }
  }

  fn message(&self) -> &'static str {
    match self {
            TransformError::InvalidCSSAttribute(_) =>
                "Invalid CSS attribute. The 'css' prop should contain a valid CSS-in-JS expression. \
                Example: css={css`color: red;`}",

            TransformError::UnsupportedSpreadElement(_) =>
                "Spread elements are not supported in the 'css' prop. \
                    Instead, use a css template literals for your styles. \
                    Example: css={css`color: red;`}",

            TransformError::InvalidJSXAttribute(_) =>
                "Invalid JSX attribute detected. Ensure all attributes have valid names and values. \
                Example: className=\"my-class\" or style={{ color: 'red' }}",

            TransformError::MissingAttributeValue(_) =>
                "An attribute is missing its value. All attributes should have a value assigned. \
                Example: css={styles} or className=\"my-class\"",

            TransformError::InvalidJSXEmptyExpr(_) =>
                "Invalid empty JSX expression found. Ensure your JSX expressions are valid JavaScript expressions.",

            TransformError::UnsupportedAttributeValue(_) =>
                "Unsupported attribute value type. Use string literals for className, \
                template literals for css prop, and object literals for style prop.",
        }
  }
}
