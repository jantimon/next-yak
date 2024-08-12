use rustc_hash::FxHashMap;

use crate::utils::ast_helper::{create_member_prop_from_string, expr_hash_map_to_object};
use css_in_js_parser::{CssScope, Declaration, ParserState, ScopeType};
use swc_core::common::DUMMY_SP;
use swc_core::ecma::ast::*;

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
  pub declarations: Vec<Declaration>,
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
    css_module_identifier: Ident,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
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
      condition,
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
      naming_convention.generate_unique_name(&format!("{}__{}", declaration_name, condition));
    self.class_name = Some(css_identifier.clone());
    // It is safe to unwrap here because the previous_parser_state is always set for a nested css
    let mut parser_state = previous_parser_state.clone().unwrap();
    // The first scope is the class name which gets attached to the element
    parser_state.current_scopes[0] = CssScope {
      name: format!(".{}", css_identifier),
      scope_type: ScopeType::Selector,
    };
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    css_module_identifier: Ident,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Member(MemberExpr {
          span: DUMMY_SP,
          obj: Box::new(Expr::Ident(css_module_identifier.clone())),
          prop: create_member_prop_from_string(self.class_name.clone().unwrap()),
        })
        .into(),
      );
    }
    arguments.extend(runtime_expressions.into_iter().map(ExprOrSpread::from));
    if !runtime_css_variables.is_empty() {
      arguments.push(
        expr_hash_map_to_object(FxHashMap::from_iter([(
          "style".to_string(),
          expr_hash_map_to_object(runtime_css_variables),
        )]))
        .into(),
      );
    }
    YakTransformResult {
      css: YakCss {
        name: self.class_name.as_ref().unwrap().to_string(),
        kind: YakType::Mixin,
        declarations: declarations.to_vec(),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
        ctxt: Default::default(),
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
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    css_module_identifier: Ident,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Member(MemberExpr {
          span: DUMMY_SP,
          obj: Box::new(Expr::Ident(css_module_identifier.clone())),
          prop: create_member_prop_from_string(self.class_name.clone().unwrap()),
        })
        .into(),
      );
    }
    arguments.extend(runtime_expressions.into_iter().map(ExprOrSpread::from));
    if !runtime_css_variables.is_empty() {
      arguments.push(
        expr_hash_map_to_object(FxHashMap::from_iter([(
          "style".to_string(),
          expr_hash_map_to_object(runtime_css_variables),
        )]))
        .into(),
      );
    }
    YakTransformResult {
      css: YakCss {
        name: self.class_name.as_ref().unwrap().to_string(),
        kind: YakType::Mixin,
        declarations: declarations.to_vec(),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
        ctxt: Default::default(),
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
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    css_module_identifier: Ident,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Member(MemberExpr {
          span: DUMMY_SP,
          obj: Box::new(Expr::Ident(css_module_identifier.clone())),
          prop: create_member_prop_from_string(self.class_name.clone().unwrap()),
        })
        .into(),
      );
    }
    arguments.extend(runtime_expressions.into_iter().map(ExprOrSpread::from));
    if !runtime_css_variables.is_empty() {
      arguments.push(
        expr_hash_map_to_object(FxHashMap::from_iter([(
          "style".to_string(),
          expr_hash_map_to_object(runtime_css_variables),
        )]))
        .into(),
      );
    }
    YakTransformResult {
      css: YakCss {
        name: self.class_name.as_ref().unwrap().to_string(),
        kind: YakType::StyledComponent,
        declarations: declarations.to_vec(),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
        ctxt: Default::default(),
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
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    css_module_identifier: Ident,
    _runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Member(MemberExpr {
          span: DUMMY_SP,
          obj: Box::new(Expr::Ident(css_module_identifier.clone())),
          prop: create_member_prop_from_string(self.animation_name.clone().unwrap()),
        })
        .into(),
      );
    }
    if !runtime_css_variables.is_empty() {
      arguments.push(
        expr_hash_map_to_object(FxHashMap::from_iter([(
          "style".to_string(),
          expr_hash_map_to_object(runtime_css_variables),
        )]))
        .into(),
      );
    }
    YakTransformResult {
      css: YakCss {
        name: self.animation_name.as_ref().unwrap().to_string(),
        kind: YakType::Keyframes,
        declarations: declarations.to_vec(),
      },
      expression: Box::new(Expr::Call(CallExpr {
        span: expression.span,
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
        ctxt: Default::default(),
      })),
    }
  }
}
