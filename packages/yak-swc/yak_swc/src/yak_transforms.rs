use css_in_js_parser::{to_css, CssScope, Declaration, ParserState, ScopeType};
use swc_core::ecma::ast::{CallExpr, Callee, Expr, ExprOrSpread, TaggedTpl};

use crate::naming_convention::NamingConvention;

#[derive(PartialEq)]
pub enum YakType {
  Mixin,
  Keyframes,
  StyledComponent,
}

/// Represents a CSS result after the transformation
pub struct YakCss {
  /// The name is used to reference the css from another expression
  ///
  /// E.g.:
  /// ```ts
  /// const Icon = styled.div`..`
  /// const Button = styled.button`${Icon} { ... }`
  /// ```
  pub name: String,
  pub kind: YakType,
  /// The generated CSS code
  pub code: String,
}

pub struct YakTransformResult {
  pub expression: Box<Expr>,
  pub css: YakCss,
}

pub trait YakTransform {
  /// Create a CSS Scope\
  /// This CSS Scope will surround the entire CSS for this literal\
  /// e.g. const myMixin = css`...` -> .myMixin { ... }
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &str,
    previous_parser_state: Option<ParserState>,
  ) -> ParserState;
  /// Transform the expression\
  /// This is where the TypeScript AST for the expression is finally transformed
  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &Vec<Declaration>,
  ) -> YakTransformResult;
}

/// Transform for nested css mixins
/// e.g. const Button = `${({$active}) => $active && css`...`}`
pub struct TransformNestedCss {
  /// Current condition which is used to determine if the mixin should be applied
  pub condition: Vec<String>,
  /// ClassName of the mixin
  class_name: Option<String>,
}

impl TransformNestedCss {
  pub fn new(condition: Vec<String>) -> TransformNestedCss {
    TransformNestedCss {
      condition: condition,
      class_name: None,
    }
  }
}

impl YakTransform for TransformNestedCss {
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &str,
    previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let condition = self.condition.join("-and-");
    let css_identifier =
      naming_convention.generate_unique_name(&format!("{}--{}", declaration_name, condition));
    self.class_name = Some(css_identifier.clone());
    // It is save to unwrap here because the previous_parser_state is alwayy set for a nested css
    let mut parser_state = previous_parser_state.clone().unwrap();
    // The first scope is the class name which gets attached to the element
    parser_state.current_scopes[0] = CssScope {
      name: format!(".{}", css_identifier),
      scope_type: ScopeType::Selector,
    };
    return parser_state;
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &Vec<Declaration>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if declarations.len() > 0 {
      arguments.push(Expr::Lit(self.class_name.as_ref().unwrap().clone().into()).into());
    }
    arguments.extend(
      runtime_expressions
        .into_iter()
        .map(|expr| ExprOrSpread::from(expr)),
    );
    YakTransformResult {
      css: YakCss {
        name: self.class_name.as_ref().unwrap().to_string(),
        kind: YakType::Mixin,
        code: to_css(&declarations),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
      })),
    }
  }
}

/// Transform for CSS Mixins
/// e.g. const myMixin = css`...`
pub struct TransformCssMixin {
  /// ClassName of the mixin
  class_name: Option<String>,
}

impl TransformCssMixin {
  pub fn new() -> TransformCssMixin {
    TransformCssMixin { class_name: None }
  }
}

impl YakTransform for TransformCssMixin {
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &str,
    _previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let css_identifier = naming_convention.generate_unique_name(declaration_name);
    self.class_name = Some(css_identifier.clone());
    let mut parser_state = ParserState::new();
    parser_state.current_scopes = vec![CssScope {
      name: format!(".{}", css_identifier),
      scope_type: ScopeType::AtRule,
    }];
    return parser_state;
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &Vec<Declaration>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if declarations.len() > 0 {
      arguments.push(Expr::Lit(self.class_name.as_ref().unwrap().clone().into()).into());
    }
    arguments.extend(
      runtime_expressions
        .into_iter()
        .map(|expr| ExprOrSpread::from(expr)),
    );
    YakTransformResult {
      css: YakCss {
        name: self.class_name.as_ref().unwrap().to_string(),
        kind: YakType::Mixin,
        code: to_css(&declarations),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
      })),
    }
  }
}

/// Transform styled component api
/// e.g. const Wrapper = styled.div`...`
pub struct TransformStyled {
  /// root class name of the styled component
  class_name: Option<String>,
}

impl TransformStyled {
  pub fn new() -> TransformStyled {
    TransformStyled { class_name: None }
  }
}

impl YakTransform for TransformStyled {
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &str,
    _previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let css_identifier = naming_convention.generate_unique_name(declaration_name);
    self.class_name = Some(css_identifier.clone());
    let mut parser_state = ParserState::new();
    parser_state.current_scopes = vec![CssScope {
      name: format!(".{}", css_identifier),
      scope_type: ScopeType::AtRule,
    }];
    return parser_state;
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &Vec<Declaration>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if declarations.len() > 0 {
      arguments.push(Expr::Lit(self.class_name.as_ref().unwrap().clone().into()).into());
    }
    arguments.extend(
      runtime_expressions
        .into_iter()
        .map(|expr| ExprOrSpread::from(expr)),
    );
    YakTransformResult {
      css: YakCss {
        name: self.class_name.as_ref().unwrap().to_string(),
        kind: YakType::StyledComponent,
        code: to_css(&declarations),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
      })),
    }
  }
}

/// Transform for keyframe animations
/// e.g. const fadeIn = keyframes`...`
pub struct TransformKeyframes {
  /// Animation Name
  animation_name: Option<String>,
}

impl TransformKeyframes {
  pub fn new() -> TransformKeyframes {
    TransformKeyframes {
      animation_name: None,
    }
  }
}

impl YakTransform for TransformKeyframes {
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &str,
    _previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let css_identifier = naming_convention.generate_unique_name(declaration_name);
    self.animation_name = Some(css_identifier.clone());
    let mut parser_state = ParserState::new();
    parser_state.current_scopes = vec![CssScope {
      name: format!("@keyframes {}", css_identifier),
      scope_type: ScopeType::AtRule,
    }];
    return parser_state;
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    _runtime_expressions: Vec<Expr>,
    declarations: &Vec<Declaration>,
  ) -> YakTransformResult {
    YakTransformResult {
      css: YakCss {
        name: self.animation_name.as_ref().unwrap().to_string(),
        kind: YakType::Keyframes,
        code: to_css(&declarations),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: vec![Expr::Lit(self.animation_name.as_ref().unwrap().clone().into()).into()],
        type_args: None,
      })),
    }
  }
}
