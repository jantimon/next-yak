use css_in_js_parser::{parse_css, to_css, CommentStateType};
use css_in_js_parser::{Declaration, ParserState};
use fxhash::FxHashMap;
use serde::Deserialize;
use std::path::Path;
use std::vec;
use swc_core::common::comments::Comment;
use swc_core::common::comments::Comments;
use swc_core::common::{Spanned, DUMMY_SP};
use swc_core::ecma::visit::VisitMutWith;
use swc_core::ecma::{
  ast::*,
  visit::{as_folder, FoldWith, VisitMut},
};
use swc_core::plugin::errors::HANDLER;
use swc_core::plugin::metadata::TransformPluginMetadataContextKind;
use swc_core::plugin::{plugin_transform, proxies::TransformPluginProgramMetadata};
use utils::add_suffix_to_expr::add_suffix_to_expr;
use utils::ast_helper::{extract_ident_and_parts, TemplateIterator};
use utils::encode_module_import::{encode_module_import, is_mixin_expression};

mod variable_visitor;
use variable_visitor::VariableVisitor;
mod yak_imports;
use yak_imports::YakImportVisitor;

mod utils {
  pub(crate) mod add_suffix_to_expr;
  pub(crate) mod assert_css_expr;
  pub(crate) mod ast_helper;
  pub(crate) mod encode_module_import;
  pub(crate) mod murmur_hash;
}
mod naming_convention;
use naming_convention::NamingConvention;

mod yak_transforms;
use yak_transforms::{
  TransformCssMixin, TransformKeyframes, TransformNestedCss, TransformStyled, YakCss, YakTransform,
  YakType,
};

/// Static plugin configuration.
#[derive(Default, Deserialize)]
#[serde(rename_all = "camelCase")]
#[serde(deny_unknown_fields)]
pub struct Config {
  /// Use Readable CSS Variable Names
  #[serde(default)]
  pub dev_mode: bool,
  /// The hash for a css-variable depends on the file name including createVar().
  /// To ensure that the hash is consistent accross multiple systems the relative path
  /// from the base dir to the source file is used.
  pub base_path: String,
}

pub struct TransformVisitor<GenericComments>
where
  // SWC provides different comment types for production and testing
  // We need to abstract over this to make the plugin testable
  // @see https://stackoverflow.com/questions/78709909/injecting-comments-with-a-swc-rust-plugin
  GenericComments: Comments,
{
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
  /// Visitor to gather all imports from the current program
  /// Used to check if the current program is using next-yak
  /// to idenftify css-in-js expressions
  yak_library_imports: YakImportVisitor,
  /// Variable Name to Unique CSS Identifier Mapping\
  /// e.g. const Rotation = keyframes`...` -> Rotation\
  /// e.g. const Button = styled.button`...` -> Button\
  /// Used to replace expressions with the actual class name or keyframes name
  variable_name_mapping: FxHashMap<String, YakCss>,
  /// Naming convention to generate unique css identifiers
  naming_convention: NamingConvention,
  /// Expression replacement to replace a yak library call with the transformed one
  expression_replacement: Option<Box<Expr>>,
  /// The current file name e.g. "App.tsx"
  filename: String,
  /// The imported css module from the virtual yak.module.css
  css_module_identifier: Option<Ident>,
  /// Dev mode to use readable css variable names
  dev_mode: bool,
}

impl<GenericComments> TransformVisitor<GenericComments>
where
  GenericComments: Comments,
{
  pub fn new(comments: Option<GenericComments>, filename: String, dev_mode: bool) -> Self {
    Self {
      current_css_state: None,
      current_declaration: vec![],
      current_variable_name: None,
      current_condition: vec![],
      variables: VariableVisitor::new(),
      yak_library_imports: YakImportVisitor::new(),
      naming_convention: NamingConvention::new(),
      variable_name_mapping: FxHashMap::default(),
      expression_replacement: None,
      css_module_identifier: None,
      dev_mode,
      filename,
      comments,
    }
  }

  /// Check if we are inside a next-yak css expression
  fn is_inside_css_expression(&self) -> bool {
    self.current_css_state.is_some()
  }

  /// Try to get the component id of the current styled component mixin or animation
  /// e.g. const Button = styled.button`color: red;` -> Button#1
  fn get_current_component_id(&self) -> String {
    self
      .current_variable_name
      .clone()
      .unwrap_or_else(|| "yak".to_string())
  }

  /// Get the current filename without extension or path e.g. "App" from "/path/to/App.tsx
  fn get_file_name_without_extension(&self) -> String {
    Path::new(&self.filename)
      .file_stem()
      .and_then(|os_str| os_str.to_str())
      .map(|s| s.to_string())
      .unwrap()
  }
}

impl<GenericComments> VisitMut for TransformVisitor<GenericComments>
where
  GenericComments: Comments,
{
  fn visit_mut_program(&mut self, program: &mut Program) {
    let mut yak_import_visitor = YakImportVisitor::new();
    program.visit_mut_children_with(&mut yak_import_visitor);
    self.yak_library_imports = yak_import_visitor;

    // Skip this program only if yak is not used at all
    if !self.yak_library_imports.is_using_next_yak() {
      return;
    }

    // Use VariableVisitor to visit the AST and extract all variable names
    let mut variable_visitor = VariableVisitor::new();
    program.visit_mut_children_with(&mut variable_visitor);
    self.variables = variable_visitor;
    program.visit_mut_children_with(self);
  }

  /// Inject the css module import to the current file so webpack can process
  /// the css separately add HMR and extract it as a static asset
  /// e.g. import __styleYak from "./App.yak.module.css!=!./App?App.yak.module.css"
  /// !=! is a webpack-specific syntax that tells webpack to override the default loaders for this import
  /// ? is a fix for Next.js loaders which ignore the !=! statement
  fn visit_mut_module(&mut self, module: &mut Module) {
    let basename = self.get_file_name_without_extension();
    let css_module_identifier = Ident::new("__styleYak".into(), DUMMY_SP);
    self.css_module_identifier = Some(css_module_identifier.clone());

    module.visit_mut_children_with(self);

    // Add the css module import to the top of the file
    // if any css-in-js expressions has been used
    if !self.variable_name_mapping.is_empty() {
      // insert it after the first yak import to avoid changing the order of "use-server" or similar definitions
      let mut yak_import_index = 0;
      for (i, item) in module.body.iter_mut().enumerate() {
        if let ModuleItem::ModuleDecl(ModuleDecl::Import(import_declaration)) = item {
          if import_declaration.src.value == "next-yak/internal" {
            yak_import_index = i + 1;
            // Add utility functions
            import_declaration.specifiers.extend(
              self
                .yak_library_imports
                .get_yak_utility_import_declaration()
                .into_iter(),
            );
            break;
          }
        }
      }
      module.body.insert(
        yak_import_index,
        ModuleItem::ModuleDecl(ModuleDecl::Import(ImportDecl {
          phase: Default::default(),
          span: DUMMY_SP,
          specifiers: vec![ImportDefaultSpecifier {
            span: DUMMY_SP,
            local: css_module_identifier,
          }
          .into()],
          src: Box::new(Str {
            span: DUMMY_SP,
            value: format!(
              "./{}.yak.module.css!=!./{}?./{}.yak.module.css",
              basename, basename, basename
            )
            .into(),
            raw: None,
          }),
          type_only: false,
          with: None,
        })),
      );
    }

    // TODO: delete all unused mixins and animations
  }

  /// Visit variable declarations
  /// To store the current name which can be used for class names
  /// e.g. Button for const Button = styled.button`color: red;`
  fn visit_mut_var_decl(&mut self, n: &mut VarDecl) {
    if !self.yak_library_imports.is_using_next_yak() {
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
    let yak_library_function_name = self.yak_library_imports.get_yak_library_function_name(n);
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
    let mut runtime_css_variables: FxHashMap<String, Expr> = FxHashMap::default();
    // When moving units into css variables it has to be removed from the next css code
    // e.g. styled.button`left: ${({$x}) => $x}px;` -> `left: var(--left);`
    let mut css_code_offset: usize = 0;

    let mut template_iter = TemplateIterator::new(&mut n.tpl);
    // Javascript Quasi (TplElement) and Expressions (Exprs) are interleaved
    // e.g. styled.button`color: ${primary};` => [TplElement, Expr, TplElement]
    while let Some(pair) = template_iter.next() {
      let is_last_pair = pair.is_last;
      let quasi = pair.quasi;

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
      let (new_state, new_declarations) = parse_css(&css_code[css_code_offset..], css_state);
      css_code_offset = 0;
      css_state = Some(new_state);
      // Add the extracted CSS to the the root styled component
      self.current_declaration.extend(new_declarations);

      let current_css_state = css_state.clone().unwrap();
      if current_css_state.current_comment_state != CommentStateType::None {
        continue;
      }

      // Expressions
      // e.g. const Button = styled.button`color: ${primary};`
      //                                            ^^^^^^^
      // e.g. const Button = styled.button`color: ${() => /* ... */};`
      //                                            ^^^^^^^^^^^^^^^^
      if let Some(expr) = pair.expr {
        // Handle constants in css expressions
        // e.g. styled.button`color: ${primary};` (Ident)
        // e.g. styled.button`color: ${colors.primary};` (MemberExpression)
        if let Some((id, member_expr_parts)) = extract_ident_and_parts(expr) {
          let scoped_name = id.to_string();
          // Known StyledComponents, Mixin or Animations in the same file
          if let Some(referenced_yak_css) = self.variable_name_mapping.get(&scoped_name) {
            // Reference StyledComponents Selector or an Animations name in the same file
            // The css code of Mixins can't be used inside css as it has already been transformed to a class name
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
              // Add the mixin to the react component
              runtime_expressions.push(*expr.clone());

              if current_css_state.current_scopes.len() > 1 {
                // If the mixin is used as scoped inline mixin
                // e.g. styled.button`&:hover { ${highlight}; }`
                HANDLER.with(|handler| {
                  handler
                    .struct_span_err(
                      id.span,
                      &format!("Mixins are not allowed inside nested selectors\nfound: ${{{}}}\nUse an inline css literal instead or move the selector into the mixin", id.sym),
                    )
                    .emit();
                });
              }
            }
          }
          // Cross-file references
          // e.g.:
          // import { primary } from "./theme";
          // styled.button`color: ${colors.primary};`
          else if let Some(module_path) = self.variables.get_imported_variable(&scoped_name) {
            let next_css_code = pair.next_quasi.map(|next_quasi| next_quasi.raw.to_string());
            if is_mixin_expression(
              css_state.clone(),
              encode_module_import(module_path.as_str(), member_expr_parts.clone()),
              next_css_code,
            ) {
              if current_css_state.current_scopes.len() == 1 {
                runtime_expressions.push(*expr.clone());
              } else {
                HANDLER.with(|handler| {
                  handler
                    .struct_span_err(
                      expr.span(),
                      "Mixins are not allowed inside nested selectors\nUse an inline css literal instead or move the selector into the mixin",
                    )
                    .emit();
                });
              }
            }
            // An imported constant
            else {
              let css_code = encode_module_import(module_path.as_str(), member_expr_parts);
              let (new_state, _) = parse_css(&css_code, css_state);
              css_state = Some(new_state);
            }
          }
          // Constants
          // e.g.:
          // const primary = "red";
          // styled.button`color: ${primary};`
          else if let Some(value) = self.variables.get_variable(&scoped_name) {
            let (new_state, _) = parse_css(&value, css_state);
            css_state = Some(new_state);
          }
          // A property with a dynamic value
          // e.g. styled.button`${({$color}) => css`color: ${$color}`};`
          else if current_css_state.is_inside_property_value {
            // If the variable is top but not a constant we can't access it
            // e.g. styled.button`color: ${color};`
            panic!("Variable {} is not a constant", scoped_name);
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
            // Check if the next quasi starts with a unit
            // e.g. styled.button`left: ${({$x}) => $x}px;`
            let unit = if let Some(next_quasi) = pair.next_quasi {
              extract_leading_css_unit(next_quasi.raw.as_str())
            } else {
              None
            };
            // The css code offset is used to remove the unit from the next css code
            css_code_offset = unit.map_or(0, |unit_str| unit_str.len());

            let mut readable_name = self
              .current_variable_name
              .clone()
              .unwrap_or("yak".to_string());
            if !readable_name.is_empty() {
              // remove #0
              readable_name = format!("{}__", readable_name)
                .replace("#0", "")
                .replace('#', "");
            }
            readable_name = format!(
              "{}{}",
              readable_name,
              css_state.as_ref().unwrap().current_declaration.property
            );
            let css_variable_name = self.naming_convention.get_css_variable_name(
              readable_name.as_str(),
              self.filename.as_str(),
              self.dev_mode,
            );
            let css_variable_runtime_expr = if let Some(unit) = unit {
              add_suffix_to_expr(
                *expr.clone(),
                self
                  .yak_library_imports
                  .get_yak_utility_ident("unitPostFix".to_string()),
                unit.to_string(),
              )
            } else {
              *expr.clone()
            };

            runtime_css_variables.insert(
              format!("--{}", css_variable_name.clone()),
              css_variable_runtime_expr,
            );
            let (new_state, _) = parse_css(&format!("var(--{})", css_variable_name), css_state);
            css_state = Some(new_state);
          } else {
            // Check if an invalid expression is used inside nested selectors
            if current_css_state.current_scopes.len() > 1 {
              utils::assert_css_expr::assert_css_expr(expr, "Inside nested selectors you can only use css literals, constants or dynamic values".to_string(), 
              self.yak_library_imports.yak_css_idents.clone());
            }
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

    let transform_result = transform.transform_expression(
      n,
      self.css_module_identifier.clone().unwrap(),
      runtime_expressions,
      &self.current_declaration,
      runtime_css_variables,
    );

    if is_top_level {
      self.current_declaration = vec![];
    }
    let css_code = to_css(&transform_result.css.declarations);
    // TODO: this works only for call expressions
    // can we make this more generic?
    if let Expr::Call(call) = &*transform_result.expression {
      if !css_code.is_empty() && is_top_level {
        self.comments.add_leading(
          call.span.lo,
          Comment {
            kind: swc_core::common::comments::CommentKind::Block,
            span: DUMMY_SP,
            text: format!("YAK Extracted CSS:\n{}\n", css_code.trim()).into(),
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

/// Extracts the leading css unit from a css code
/// Use a heuristic to determine if the unit is a valid css unit by checking the length
fn extract_leading_css_unit(css: &str) -> Option<&str> {
  let end = css.find(|c: char| !c.is_alphabetic()).unwrap_or(css.len());
  if end > 0 && end <= 4 {
    let unit = &css[..end];
    return Some(unit);
  }
  None
}

#[plugin_transform]
pub fn process_transform(program: Program, metadata: TransformPluginProgramMetadata) -> Program {
  let config: Config = serde_json::from_str(
    &metadata
      .get_transform_plugin_config()
      .expect("failed to get plugin config for swc-yak"),
  )
  .expect("failed to parse plugin swc-yak config");

  let filename = metadata
    .get_context(&TransformPluginMetadataContextKind::Filename)
    .expect("failed to get filename");
  // Get a relative posix path to generate always the same hash
  // on different machines or operating systems
  let deterministic_path = relative_posix_path::relative_posix_path(&config.base_path, &filename);
  program.fold_with(&mut as_folder(TransformVisitor::new(
    metadata.comments,
    deterministic_path,
    config.dev_mode,
  )))
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
      &|tester| {
        as_folder(TransformVisitor::new(
          Some(tester.comments.clone()),
          "path/input.tsx".to_string(),
          true,
        ))
      },
      &input,
      &input.with_file_name("output.tsx"),
      FixtureTestConfig {
        sourcemap: false,
        allow_error: true,
      },
    )
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

  #[test]
  fn test_extract_leading_css_unit() {
    assert_eq!(extract_leading_css_unit("px "), Some("px"));
    assert_eq!(extract_leading_css_unit("px;"), Some("px"));
    assert_eq!(extract_leading_css_unit("px}"), Some("px"));
    assert_eq!(extract_leading_css_unit("px"), Some("px"));
    assert_eq!(extract_leading_css_unit(" px"), None);
    assert_eq!(extract_leading_css_unit("1px"), None);
    assert_eq!(extract_leading_css_unit("color"), None);
  }
}
