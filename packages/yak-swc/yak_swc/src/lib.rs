use css_in_js_parser::{parse_css, CommentStateType};
use css_in_js_parser::{Declaration, ParserState};
use itertools::Itertools;
use std::collections::HashMap;
use swc_core::common::comments::Comment;
use swc_core::common::comments::Comments;
use swc_core::common::DUMMY_SP;
use swc_core::ecma::visit::VisitMutWith;
use swc_core::ecma::{
  ast::*,
  visit::{as_folder, FoldWith, VisitMut},
};
use swc_core::plugin::{plugin_transform, proxies::TransformPluginProgramMetadata};

mod variable_visitor;
use variable_visitor::VariableVisitor;

mod naming_convention;
use naming_convention::NamingConvention;

mod yak_transforms;
use yak_transforms::{
  TransformCssMixin, TransformKeyframes, TransformNestedCss, TransformStyled, YakCss, YakTransform,
  YakType,
};

pub struct TransformVisitor<GenericComments>
where
  // SWC provides different comment types for production and testing
  // We need to abstract over this to make the plugin testable
  // @see https://stackoverflow.com/questions/78709909/injecting-comments-with-a-swc-rust-plugin
  GenericComments: Comments,
{
  next_yak_imports: HashMap<String, String>,
  /// Last css parser state to contiue parsing the next css code from a quasi
  /// in the same scope
  current_css_state: Option<ParserState>,
  /// All css declarations of the current root css expression
  current_declaration: Vec<Declaration>,
  /// e.g Button in const Button = styled.button`color: red;`
  current_variable_name: Option<String>,
  /// Current condition to name nested css expressions
  current_condition: Vec<String>,
  /// SWC comments proxy to add extracted css as comments
  comments: Option<GenericComments>,
  /// Extracted variables from the AST
  /// Used to access constants in css expressions
  variables: VariableVisitor,
  /// Variable Name to Unique CSS Identifier Mapping\
  /// e.g. const Rotation = keyframes`...` -> Rotation\
  /// e.g. const Button = styled.button`...` -> Button\
  /// Used to replace expressions with the actual class name or keyframes name
  variable_name_mapping: HashMap<String, YakCss>,
  /// Naming convention to generate unique css identifiers
  naming_convention: NamingConvention,
  /// Expression replacement to replace a yak library call with the transformed one
  expression_replacement: Option<Box<Expr>>,
}

impl<GenericComments> TransformVisitor<GenericComments>
where
  GenericComments: Comments,
{
  pub fn new(comments: Option<GenericComments>) -> Self {
    Self {
      next_yak_imports: HashMap::new(),
      current_css_state: None,
      current_declaration: vec![],
      current_variable_name: None,
      current_condition: vec![],
      variables: VariableVisitor::new(),
      naming_convention: NamingConvention::new(),
      variable_name_mapping: HashMap::new(),
      expression_replacement: None,
      comments,
    }
  }

  /// Check if the current AST has imports to the next-yak library
  fn is_using_next_yak(&self) -> bool {
    !self.next_yak_imports.is_empty()
  }

  /// Check if we are inside a next-yak css expression
  fn is_inside_css_expression(&self) -> bool {
    self.current_css_state.is_some()
  }

  /// Get the name of the used next-yak library function
  /// e.g. styled.button`color: red;` -> styled
  fn get_yak_library_function_name(&self, n: &TaggedTpl) -> Option<String> {
    if !self.is_using_next_yak() {
      return None;
    }
    // styled.button`color: red;`
    // keyframes`from { color: red; }`
    // css`color: red;`
    // styled.button.attrs({})`color: red;`
    return match &*n.tag {
      Expr::Ident(Ident { sym, .. }) => self.next_yak_imports.get(&sym.to_string()).cloned(),
      Expr::Member(MemberExpr { obj, .. }) => {
        if let Expr::Ident(Ident { sym, .. }) = &**obj {
          self.next_yak_imports.get(&sym.to_string()).cloned()
        } else {
          None
        }
      }
      _ => None,
    };
  }

  /// Try to get the component id of the current styled component mixin or animation
  /// e.g. const Button = styled.button`color: red;` -> Button#1
  fn get_current_component_id(&self) -> String {
    self
      .current_variable_name
      .clone()
      .unwrap_or("yak".to_string())
  }
}

impl<GenericComments> VisitMut for TransformVisitor<GenericComments>
where
  GenericComments: Comments,
{
  fn visit_mut_program(&mut self, program: &mut Program) {
    // Use VariableVisitor to visit the AST and extract all variable names
    let mut variable_visitor = VariableVisitor::new();
    program.visit_mut_children_with(&mut variable_visitor);
    self.variables = variable_visitor;
    program.visit_mut_children_with(self);
  }

  /// Visit the import declaration and store the imported names
  /// That way we know if `styled`, `css` is imported from "next-yak"
  /// and we can transpile their usages
  fn visit_mut_import_decl(&mut self, import_decl: &mut ImportDecl) {
    if import_decl.src.value == "next-yak" {
      // Compiling will change the way the utils are called
      // Therefore the types are split between the user usage
      // and how the library is called internally
      import_decl.src.value = "next-yak/internal".into();
      import_decl.src.raw = None;
      // Store the local name of the imported function
      for specifier in &import_decl.specifiers {
        if let ImportSpecifier::Named(named) = specifier {
          let imported = match &named.imported {
            Some(ModuleExportName::Ident(i)) => i.sym.to_string(),
            None => named.local.sym.to_string(),
            _ => continue,
          };
          let local = named.local.sym.to_string();
          self.next_yak_imports.insert(local, imported);
        }
      }
    }
  }

  /// Visit variable declarations
  /// To store the current name which can be used for class names
  /// e.g. Button for const Button = styled.button`color: red;`
  fn visit_mut_var_decl(&mut self, n: &mut VarDecl) {
    if !self.is_using_next_yak() {
      return;
    }
    for decl in &mut n.decls {
      if let Pat::Ident(BindingIdent { id, .. }) = &decl.name {
        let previous_variable_name = self.current_variable_name.clone();
        self.current_variable_name = Some(id.to_string());
        decl.init.visit_mut_with(self);
        self.current_variable_name = previous_variable_name;
      }
    }
  }

  // Visit ternary expressions
  // To store the current condition which can be used for class names of nested css expressions
  fn visit_mut_expr(&mut self, n: &mut Expr) {
    // Transform tagged template literals
    // e.g. styled.button`color: red;`
    if let Expr::TaggedTpl(tpl) = n {
      let replacement_before = self.expression_replacement.clone();
      self.visit_mut_tagged_tpl(tpl);
      if let Some(replacement) = self.expression_replacement.clone() {
        *n = *replacement;
      }
      self.expression_replacement = replacement_before;
    }
    // Store the current conditions so they can be used to name nested css expressions
    // e.g. const Button = styled.button`${({$active}) => $active && css`...`}` -> Button__active
    else if self.is_inside_css_expression() {
      match n {
        Expr::Cond(cond) => {
          cond.test.visit_mut_with(self);

          // Push condition for the consequent
          self
            .current_condition
            .push(condition_to_string(&cond.test, false));
          cond.cons.visit_mut_with(self);
          self.current_condition.pop();

          // Push negated condition for the alternate
          self
            .current_condition
            .push(condition_to_string(&cond.test, true));
          cond.alt.visit_mut_with(self);
          self.current_condition.pop();
        }
        Expr::Bin(bin) if bin.op == BinaryOp::LogicalAnd => {
          bin.left.visit_mut_with(self);

          // Push condition for right side
          self
            .current_condition
            .push(condition_to_string(&bin.left, false));
          bin.right.visit_mut_with(self);
          self.current_condition.pop();
        }
        Expr::Bin(bin) if bin.op == BinaryOp::LogicalOr => {
          bin.left.visit_mut_with(self);

          // Push negated condition for right side
          self
            .current_condition
            .push(condition_to_string(&bin.left, true));
          bin.right.visit_mut_with(self);
          self.current_condition.pop();
        }
        _ => n.visit_mut_children_with(self),
      }
    } else {
      n.visit_mut_children_with(self);
    }
  }

  /// Visit tagged template literals
  /// This is where the css-in-js expressions are
  fn visit_mut_tagged_tpl(&mut self, n: &mut TaggedTpl) {
    let yak_library_function_name = self.get_yak_library_function_name(n);
    if yak_library_function_name.is_none() {
      n.visit_mut_children_with(self);
      return;
    }

    let is_top_level = !self.is_inside_css_expression();

    let mut transform: Box<dyn YakTransform> = match yak_library_function_name.as_deref() {
      // Styled Components transform works only on top level
      Some("styled") if is_top_level => Box::new(TransformStyled::new()),
      // Keyframes transform works only on top level
      Some("keyframes") if is_top_level => Box::new(TransformKeyframes::new()),
      // CSS Mixin e.g. const highlight = css`color: red;`
      Some("css") if is_top_level => Box::new(TransformCssMixin::new()),
      // CSS Inline mixin e.g. styled.button`${() => css`color: red;`}`
      Some("css") => Box::new(TransformNestedCss::new(self.current_condition.clone())),
      _ => panic!(
        "Invalid context for next-yak function {:?}",
        yak_library_function_name
      ),
    };

    let current_variable_id = self.get_current_component_id();
    // Remove the scope postfix to make the variable name easier to read
    let current_variable_name = current_variable_id.split('#').next().unwrap();

    // Current css parser state to parse an incomplete css code from a quasi
    // In css-in-js the outer css scope is missing e.g.:
    // styled.button`color: red;` => .button { color: red; }
    //
    // Depending on the library function used (styled, keyframes, css, ...)
    // a surrounding scope is added
    let mut css_state = Some(transform.create_css_state(
      &mut self.naming_convention,
      current_variable_name,
      self.current_css_state.clone(),
    ));

    // Literal expressions which can't be replaced by constant values
    // and must be kept for the final output (so they run at runtime)
    let mut runtime_expressions: Vec<Expr> = vec![];
    let mut runtime_css_variables: HashMap<String, Expr> = HashMap::new();

    // Javascript Quasi (TplElement) and Expressions (Exprs) are interleaved
    // e.g. styled.button`color: ${primary};` => [TplElement, Expr, TplElement]
    for (i, pair) in n
      .tpl
      .quasis
      .iter()
      .zip_longest(n.tpl.exprs.iter_mut())
      .enumerate()
    {
      let is_last_pair = i == n.tpl.quasis.len() - 1;
      let quasi = pair.as_ref().left().unwrap();
      let css_code = if is_last_pair {
        // allow a css literal to skip the last semicolon
        let final_quasi = quasi.raw.trim_end();
        if final_quasi.ends_with(';') || final_quasi.ends_with('}') {
          quasi.raw.to_string()
        } else {
          format!("{};", final_quasi).to_string()
        }
      } else {
        quasi.raw.to_string()
      };
      let (new_state, new_declarations) = parse_css(&css_code, css_state);
      css_state = Some(new_state);
      // Add the extracted CSS to the the root styled component
      self.current_declaration.extend(new_declarations);

      if css_state.clone().unwrap().current_comment_state == CommentStateType::None {
        // Expressions
        // e.g. const Button = styled.button`color: ${primary};`
        //                                            ^^^^^^^
        // e.g. const Button = styled.button`color: ${() => /* ... */};`
        //                                            ^^^^^^^^^^^^^^^^
        if let Some(expr) = pair.right() {
          // Handle constants in css expressions
          // e.g. styled.button`color: ${primary};`
          if let Expr::Ident(id) = &**expr {
            let scoped_name = id.to_string();
            if let Some(referenced_yak_css) = self.variable_name_mapping.get(&scoped_name) {
              // Reference StyledComponents or Animations in the same file
              // Mixins can't be used inside css code and is an empty string
              if referenced_yak_css.kind == YakType::StyledComponent
                || referenced_yak_css.kind == YakType::Keyframes
              {
                let (new_state, new_declarations) =
                  parse_css(referenced_yak_css.name.as_str(), css_state);
                css_state = Some(new_state);
                self.current_declaration.extend(new_declarations);
              }
              // Mixins e.g.
              // const highlight = css`color: red;`
              // styled.button`${highlight};`
              else if referenced_yak_css.kind == YakType::Mixin {
                runtime_expressions.push(*expr.clone());
              }
            } else if let Some(value) = self.variables.get_imported_variable(&scoped_name) {
              // In rust we cant access the bundler resolver
              // therefore we add a reference to the imported variable
              // :module-selector-import(FOO from 'bar')
              // later in the bundler we can replace this with the actual value
              let selector = format!("::module-selector-import({} '{}')", id.sym, value);
              let (new_state, new_declarations) = parse_css(selector.as_str(), css_state);
              css_state = Some(new_state);
              self.current_declaration.extend(new_declarations);
            } else if let Some(value) = self.variables.get_variable(&scoped_name) {
              let (new_state, _) = parse_css(&value, css_state);
              css_state = Some(new_state);
            }
            // A property with a dynamic value
            // e.g. styled.button`${({$color}) => css`color: ${$color}`};`
            else if css_state.is_some() && css_state.as_ref().unwrap().is_inside_property_value {
              if !self.variables.is_top_level(&scoped_name) {
                // Convert the variable to a css variable
                // e.g. styled.button`${({$size, $active}) => $active && css`width: ${size}px`};`
                let (new_state, _) = parse_css("var(--TODO)", css_state);
                css_state = Some(new_state);
              } else {
                // If the variable is top but not a constant we can't access it
                // e.g. styled.button`color: ${color};`
                panic!("Variable {} is not a constant", scoped_name);
              }
            } else {
              // If the variable is not found we can't access it
              panic!("You cant use '{}' outside of a css value", id.sym);
            }
          }
          // Visit nested css expressions
          // e.g. styled.button`.foo { ${({$x}) => $x && css`color: red`}; }`
          // e.g. styled.button`left: ${({$x}) => $x};`
          else {
            // Used for resetting the css state after processing all expressions
            let css_state_before = self.current_css_state.clone();
            // store the current css state so we can use it in nested css expressions
            self.current_css_state.clone_from(&css_state);

            let is_inside_property_value = css_state.as_ref().unwrap().is_inside_property_value;

            // If the expression is inside a css property value
            // it has to be replaced with a css variable
            if is_inside_property_value {
              dbg!(&css_state.as_ref().unwrap());
              let css_variable_name = self.naming_convention.get_css_variable_name(
                css_state
                  .as_ref()
                  .unwrap()
                  .current_declaration
                  .property
                  .as_str(),
                // TODO: get the current file name
                "todo.tsx",
                // TODO: get the current dev mode
                true,
              );
              runtime_css_variables.insert(css_variable_name.clone(), *expr.clone());
              let (new_state, _) = parse_css(&format!("var(--{})", css_variable_name), css_state);
              css_state = Some(new_state);
            }

            expr.visit_mut_children_with(self);

            // If the expression is outside a css property value
            // it is probably a nested css expression
            if !is_inside_property_value {
              runtime_expressions.push(*expr.clone());
            }

            // revert to the css state before the current expression or literal
            self.current_css_state = css_state_before;
          }
        }
      }
    }

    let transform_result = transform.transform_expression(
      n,
      runtime_expressions,
      &self.current_declaration,
      runtime_css_variables,
    );

    if is_top_level {
      self.current_declaration = vec![];
    }
    let css_code = transform_result.css.code.trim();
    // TODO: this works only for call expressions
    // can we make this more generic?
    if let Expr::Call(call) = &*transform_result.expression {
      if !css_code.is_empty() && is_top_level {
        self.comments.add_leading(
          call.span.lo,
          Comment {
            kind: swc_core::common::comments::CommentKind::Block,
            span: DUMMY_SP,
            text: format!("YAK Extracted CSS:\n{}\n", css_code).into(),
          },
        );
      }
      self.comments.add_leading(call.span.lo, pure_annotation());
    }
    self.expression_replacement = Some(transform_result.expression);
    self
      .variable_name_mapping
      .insert(current_variable_id, transform_result.css);
  }
}

/// Converts an expression to a string
fn condition_to_string(expr: &Expr, negate: bool) -> String {
  let prefix = if negate { "not_" } else { "" };
  match expr {
    Expr::Ident(Ident { sym, .. }) => format!("{}{}", prefix, sym),
    Expr::Lit(Lit::Bool(Bool { value, .. })) => format!("{}{}", prefix, value),
    Expr::Member(MemberExpr { obj, prop, .. }) => {
      let obj = condition_to_string(obj, false);
      let prop = match prop {
        MemberProp::Ident(Ident { sym, .. }) => sym.to_string(),
        _ => "".to_string(),
      };
      if prop.is_empty() || obj.is_empty() {
        return "".to_string();
      }
      format!("{}.{}", obj, prop)
    }
    _ => "".to_string(),
  }
}

/// Adds the `#__PURE__` comment for minifiers
/// to remove the function call if it's not used
fn pure_annotation() -> Comment {
  Comment {
    kind: swc_core::common::comments::CommentKind::Block,
    span: DUMMY_SP,
    text: "#__PURE__".to_string().into(),
  }
}

#[plugin_transform]
pub fn process_transform(program: Program, metadata: TransformPluginProgramMetadata) -> Program {
  program.fold_with(&mut as_folder(TransformVisitor::new(metadata.comments)))
}

#[cfg(test)]
mod tests {
  use super::*;
  use std::path::PathBuf;
  use swc_core::ecma::transforms::testing::{test_fixture, test_transform};
  use swc_ecma_transforms_testing::FixtureTestConfig;

  #[testing::fixture("tests/fixture/**/input.tsx")]
  fn fixture(input: PathBuf) {
    test_fixture(
      Default::default(),
      &|tester| as_folder(TransformVisitor::new(Some(tester.comments.clone()))),
      &input,
      &input.with_file_name("output.tsx"),
      FixtureTestConfig::default(),
    );
  }

  #[test]
  fn test_condition_to_string() {
    struct TestVisitor {}
    impl TestVisitor {
      fn new() -> Self {
        Self {}
      }
    }
    impl VisitMut for TestVisitor {
      fn visit_mut_expr(&mut self, n: &mut Expr) {
        *n = Expr::Lit(Lit::Str(Str {
          span: DUMMY_SP,
          value: condition_to_string(&n.clone(), false).into(),
          raw: None,
        }));
      }
    }

    test_transform(
      Default::default(),
      |_| as_folder(TestVisitor::new()),
      "member.example.test",
      "\"member.example.test\"",
      false,
    );

    test_transform(
      Default::default(),
      |_| as_folder(TestVisitor::new()),
      "fooBar",
      "\"fooBar\"",
      false,
    );
  }
}
