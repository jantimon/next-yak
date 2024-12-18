use itertools::Itertools;
use rustc_hash::FxHashMap;
use swc_core::common::util::move_map::MoveMap;

use crate::utils::ast_helper::expr_hash_map_to_object;
use crate::utils::encode_module_import::encode_percent;
use crate::variable_visitor::ScopedVariableReference;
use css_in_js_parser::{CssScope, Declaration, ParserState, ScopeType};
use swc_core::common::{Span, SyntaxContext, DUMMY_SP};
use swc_core::ecma::ast::*;
use swc_core::plugin::errors::HANDLER;

use crate::naming_convention::NamingConvention;

/// Represents a CSS result after the transformation
#[derive(Debug)]
pub struct YakCss {
  pub comment_prefix: Option<String>,
  /// The generated CSS code
  pub declarations: Vec<Declaration>,
}

#[derive(Debug)]
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
    declaration_name: &ScopedVariableReference,
    previous_parser_state: Option<ParserState>,
  ) -> ParserState;
  /// Transform the expression\
  /// This is where the TypeScript AST for the expression is finally transformed
  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult;
  /// Get animation or styled component selector name
  fn get_css_reference_name(&self) -> Option<String> {
    None
  }
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
    declaration_name: &ScopedVariableReference,
    previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let condition = self.condition.join("-and-");
    let css_identifier = naming_convention.get_css_class_name(&format!(
      "{}__{}",
      declaration_name.to_readable_string(),
      condition
    ));
    self.class_name = Some(css_identifier.clone());
    // It is safe to unwrap here because the previous_parser_state is always set for a nested css
    let mut parser_state = previous_parser_state.clone().unwrap();
    // The first scope is the class name which gets attached to the element
    parser_state.current_scopes[0] = CssScope {
      name: format!(":global(.{})", css_identifier),
      scope_type: ScopeType::Selector,
    };
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Lit(Lit::Str(Str {
          span: DUMMY_SP,
          value: self.class_name.clone().unwrap().into(),
          raw: None,
        }))
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
        comment_prefix: None,
        declarations: declarations.to_vec(),
      },
      expression: (Box::new(Expr::Call(CallExpr {
        // Use a sepcial span as this expression might be cloned as part
        // of a parent expression and therefore needs a unique span to
        // avoid collisions for the comments
        span: Span::dummy_with_cmt(),
        callee: Callee::Expr(expression.tag.clone()),
        ctxt: SyntaxContext::empty(),
        args: arguments,
        type_args: None,
      }))),
    }
  }
}

/// Transform for CSS Mixins
/// e.g. const myMixin = css`...`
pub struct TransformCssMixin {
  /// ClassName of the mixin
  export_name: Option<ScopedVariableReference>,
  is_exported: bool,
  is_within_jsx_attribute: bool,
  class_name: Option<String>,
}

impl TransformCssMixin {
  pub fn new(is_exported: bool, is_within_jsx_attribute: bool) -> TransformCssMixin {
    TransformCssMixin {
      export_name: None,
      is_exported,
      is_within_jsx_attribute,
      class_name: None,
    }
  }
}

impl YakTransform for TransformCssMixin {
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &ScopedVariableReference,
    _previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    self.export_name = Some(declaration_name.clone());
    let mut parser_state = ParserState::new();
    let css_identifier =
      naming_convention.get_css_class_name(&declaration_name.to_readable_string());
    self.class_name = Some(css_identifier.clone());
    parser_state.current_scopes = vec![CssScope {
      name: format!(":global(.{})", css_identifier),
      scope_type: ScopeType::AtRule,
    }];
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let has_dynamic_content = !runtime_expressions.is_empty() || !runtime_css_variables.is_empty();

    if (self.is_exported || self.is_within_jsx_attribute) && has_dynamic_content {
      // For now dynamic mixins are not supported cross file
      // as the scope handling is quite complicated
      let error_msg = if self.is_exported {
        "Dynamic mixins must not be exported. Please ensure that this mixin requires no props."
      } else {
        "Dynamic mixins must not be used within JSX attributes. Please ensure that this mixin requires no props."
      };

      HANDLER.with(|handler| {
        handler.struct_span_err(expression.span, error_msg).emit();
      });
    }

    let mut arguments: Vec<ExprOrSpread> = vec![];
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
    let css_prefix = match (self.is_exported, self.is_within_jsx_attribute) {
      (true, _) => Some(format!(
        "YAK EXPORTED MIXIN:{}",
        self
          .export_name
          .as_ref()
          .unwrap()
          .parts
          .iter()
          .map(|atom| encode_percent(atom.as_str()))
          .join(":")
      )),
      (_, true) => {
        // Add the class name to the arguments, to be created by the CSS loader
        arguments.push(
          Expr::Lit(Lit::Str(Str {
            span: DUMMY_SP,
            value: self.class_name.as_ref().unwrap().as_str().into(),
            raw: None,
          }))
          .into(),
        );
        Some("YAK Extracted CSS:".to_string())
      }
      _ => None,
    };
    YakTransformResult {
      css: YakCss {
        comment_prefix: css_prefix,
        declarations: declarations.to_vec().move_map(|mut declaration| {
          // TODO: Fix nested mixins
          if !self.is_within_jsx_attribute {
            declaration.scope.remove(0);
          }
          declaration
        }),
      },
      expression: (Box::new(Expr::Call(CallExpr {
        span: expression.span,
        ctxt: SyntaxContext::empty(),
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
      }))),
    }
  }

  fn get_css_reference_name(&self) -> Option<String> {
    if self.is_within_jsx_attribute {
      return Some(self.export_name.as_ref().unwrap().to_readable_string());
    }
    None
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
    declaration_name: &ScopedVariableReference,
    _previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let css_identifier =
      naming_convention.get_css_class_name(&declaration_name.to_readable_string());
    self.class_name = Some(css_identifier.clone());
    let mut parser_state = ParserState::new();
    parser_state.current_scopes = vec![CssScope {
      name: format!(":global(.{})", css_identifier),
      scope_type: ScopeType::AtRule,
    }];
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Lit(Lit::Str(Str {
          span: DUMMY_SP,
          value: self.class_name.clone().unwrap().into(),
          raw: None,
        }))
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
        comment_prefix: Some("YAK Extracted CSS:".to_string()),
        declarations: declarations.to_vec(),
      },
      expression: (Box::new(Expr::Call(CallExpr {
        span: expression.span,
        ctxt: SyntaxContext::empty(),
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
      }))),
    }
  }

  /// Get the selector for the specific styled component to be used in other expressions
  fn get_css_reference_name(&self) -> Option<String> {
    Some(format!(".{}", self.class_name.clone().unwrap()))
  }
}

/// Transform for keyframe animations
/// e.g. const fadeIn = keyframes`...`
pub struct TransformKeyframes {
  /// Animation Name
  animation_name: Option<String>,
}

impl TransformKeyframes {
  pub fn new(animation_name: String) -> TransformKeyframes {
    TransformKeyframes {
      animation_name: Some(animation_name),
    }
  }
}

impl YakTransform for TransformKeyframes {
  fn create_css_state(
    &mut self,
    naming_convention: &mut NamingConvention,
    declaration_name: &ScopedVariableReference,
    _previous_parser_state: Option<ParserState>,
  ) -> ParserState {
    let css_identifier = if self.animation_name.is_none() {
      let new_identifier =
        naming_convention.get_keyframe_name(&declaration_name.to_readable_string());
      self.animation_name = Some(new_identifier.clone());
      new_identifier
    } else {
      self.animation_name.clone().unwrap()
    };
    let mut parser_state = ParserState::new();
    parser_state.current_scopes = vec![CssScope {
      name: format!("@keyframes :global({})", css_identifier),
      scope_type: ScopeType::AtRule,
    }];
    parser_state
  }

  fn transform_expression(
    &mut self,
    expression: &mut TaggedTpl,
    _runtime_expressions: Vec<Expr>,
    declarations: &[Declaration],
    runtime_css_variables: FxHashMap<String, Expr>,
  ) -> YakTransformResult {
    let mut arguments: Vec<ExprOrSpread> = vec![];
    if !declarations.is_empty() {
      arguments.push(
        Expr::Lit(Lit::Str(Str {
          span: DUMMY_SP,
          value: self.animation_name.clone().unwrap().into(),
          raw: None,
        }))
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
        comment_prefix: Some("YAK Extracted CSS:".to_string()),
        declarations: declarations.to_vec(),
      },
      expression: (Box::new(Expr::Call(CallExpr {
        span: expression.span,
        ctxt: SyntaxContext::empty(),
        callee: Callee::Expr(expression.tag.clone()),
        args: arguments,
        type_args: None,
      }))),
    }
  }

  /// Get the selector for the keyframe to be used in other expressions
  fn get_css_reference_name(&self) -> Option<String> {
    Some(format!("global({})", self.animation_name.clone().unwrap()))
  }
}
