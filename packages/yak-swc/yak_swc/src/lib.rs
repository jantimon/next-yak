use css_in_js_parser::{parse_css, to_css, to_css_with_state, CssScope, ScopeType};
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
use swc_core::plugin::proxies::PluginCommentsProxy;
use swc_core::plugin::{plugin_transform, proxies::TransformPluginProgramMetadata};

mod variable_visitor;
use variable_visitor::VariableVisitor;

pub struct TransformVisitor {
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
  comments: Option<PluginCommentsProxy>,
  /// Extracted variables from the AST
  /// Used to access constants in css expressions
  variables: VariableVisitor,
}

impl TransformVisitor {
  pub fn new(comments: Option<PluginCommentsProxy>) -> Self {
    Self {
      next_yak_imports: HashMap::new(),
      current_css_state: None,
      current_declaration: vec![],
      current_variable_name: None,
      current_condition: vec![],
      variables: VariableVisitor::new(),
      comments,
    }
  }

  // Check if the current AST has imports to the next-yak library
  fn is_using_next_yak(&self) -> bool {
    !self.next_yak_imports.is_empty()
  }

  // Check if we are inside a next-yak css expression
  fn is_inside_css_expression(&self) -> bool {
    self.current_css_state.is_some()
  }
}

impl VisitMut for TransformVisitor {
  fn visit_mut_program(&mut self, n: &mut Program) {
    // Use VariableVisitor to visit the AST and extract all variable names
    let mut variable_visitor = VariableVisitor::new();
    n.visit_mut_children_with(&mut variable_visitor);
    self.variables = variable_visitor;
    n.visit_mut_children_with(self);
  }

  /// Visit the import declaration and store the imported names
  /// That way we know if `styled`, `css` is imported from "next-yak"
  /// and we can transpile their usages
  fn visit_mut_import_decl(&mut self, n: &mut ImportDecl) {
    if n.src.value == "next-yak" {
      for specifier in &n.specifiers {
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
  }

  /// Visit tagged template literals
  /// This is where the css-in-js expressions are
  fn visit_mut_tagged_tpl(&mut self, n: &mut TaggedTpl) {
    if !self.is_using_next_yak() {
      return;
    }
    // styled.button`color: red;`
    // keyframes`from { color: red; }`
    // css`color: red;`
    // styled.button.attrs({})`color: red;`
    let yak_library_function_name = match &*n.tag {
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

    // Only continue if the template literal is our own styled, css or keyframes
    if yak_library_function_name.is_none() {
      return;
    }

    let is_top_level = self.current_css_state.is_none();
    // Current css parser state to parse an incomplete css code from a quasi
    let mut css_state = self.current_css_state.clone();

    let current_variable_name = self
      .current_variable_name
      .clone()
      .unwrap_or("default".to_string())
      // SWC variables end with #0
      .replace("#0", "")
      .replace('#', "_");

    // In css-in-js the outer css scope is missing e.g.:
    // styled.button`color: red;` => .button { color: red; }
    //
    // Depending on the library function used (styled, keyframes, css, ...)
    // a surrounding scope is added
    if !self.is_inside_css_expression() {
      self.current_declaration = vec![];
      css_state = Some(ParserState::new(Some(Vec::from([
        match yak_library_function_name.as_deref() {
          Some("styled") => CssScope {
            name: format!(".{}", current_variable_name),
            scope_type: ScopeType::Selector,
          },
          Some("css") => CssScope {
            name: format!(".{}", current_variable_name),
            scope_type: ScopeType::Selector,
          },
          Some("keyframes") => CssScope {
            name: format!("@keyframes {}", current_variable_name),
            scope_type: ScopeType::AtRule,
          },
          _ => panic!("Unknown next-yak function"),
        },
      ]))));
    } else {
      // Nested css expressions can't use the variable name of the outer scope
      // but need their own name
      // To help developers during debugging we try to use the conditions of the current expression
      // e.g. const Button styled.button`${({$x}) => $x && css`color: red`}` -> .Button_and_x { color: red; }
      if yak_library_function_name.as_deref() == Some("css") {
        let mut css_state_with_css_scope = css_state.clone().unwrap();
        let condition = self.current_condition.join("_and_");
        css_state_with_css_scope.current_scopes[0] = CssScope {
          // TODO: that the name is unique
          name: format!(".{}--{}", current_variable_name, condition),
          scope_type: ScopeType::Selector,
        };
        css_state = Some(css_state_with_css_scope);
      } else {
        panic!("Unsupported nested yak expression");
      }
    }

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
        // therefore we trim the last quasi element and add a semicolon
        format!("{};", quasi.raw.trim()).to_string()
      } else {
        quasi.raw.to_string()
      };
      let (new_state, new_declarations) = parse_css(&css_code, css_state);
      css_state = Some(new_state);
      // Add the extracted css declarations to the current css state
      self.current_declaration.extend(new_declarations);

      // Expressions
      if let Some(expr) = pair.right() {
        // TODO: Handle selectors

        // Handle constants in css expressions
        // e.g. styled.button`color: ${primary};`
        if let Expr::Ident(Ident { sym, .. }) = &**expr {
          if let Some(value) = self.variables.get_imported_variable(sym) {
            // In rust we cant access the bundler resolver
            // therefore we add a reference to the imported variable
            // :module-selector-import(FOO from 'bar')
            // later in the bundler we can replace this with the actual value
            let selector = format!("::module-selector-import({} '{}')", sym, value);
            let (new_state, new_declarations) = parse_css(selector.as_str(), css_state);
            css_state = Some(new_state);
            self.current_declaration.extend(new_declarations);
          } else if let Some(value) = self.variables.get_variable(sym) {
            let (new_state, new_declarations) = parse_css(&value, css_state);
            css_state = Some(new_state);
            self.current_declaration.extend(new_declarations);
          }
        }
        // Visit nested css expressions
        // e.g. styled.button`.foo { ${({$x}) => $x && css`color: red`}; }`
        else {
          // Used for resetting the css state after processing all expressions
          let css_state_before = self.current_css_state.clone();
          // store the current css state so we can use it in nested css expressions
          self.current_css_state.clone_from(&css_state);
          expr.visit_mut_children_with(self);
          // revert to the css state before the current expression or literal
          self.current_css_state = css_state_before;
        }
      }
    }

    // Add the extracted CSS as a comment
    if is_top_level {
      {
        // TODO: Remove debug output:
        println!("{}", to_css(&self.current_declaration));

        if let Some(comments) = &self.comments {
          comments.add_leading(
            n.tpl.span.lo,
            Comment {
              kind: swc_core::common::comments::CommentKind::Block,
              span: DUMMY_SP,
              text: to_css_with_state(&self.current_declaration, css_state).into(),
            },
          );
          self.current_declaration = vec![];
        }
      }

      // Replace the quasi with "EXTRACTED"
      n.tpl = Box::new(Tpl {
        span: DUMMY_SP,
        exprs: vec![],
        quasis: vec![TplElement {
          span: DUMMY_SP,
          raw: "EXTRACTED".into(),
          cooked: None,
          tail: true,
        }],
      });
    }
  }
}

fn condition_to_string(expr: &Expr, negate: bool) -> String {
  let prefix = if negate { "not_" } else { "" };
  match expr {
    Expr::Ident(Ident { sym, .. }) => format!("{}{}", prefix, sym).replace('#', ""),
    Expr::Lit(Lit::Bool(Bool { value, .. })) => format!("{}{}", prefix, value),
    _ => "".to_string(),
  }
}

#[plugin_transform]
pub fn process_transform(program: Program, metadata: TransformPluginProgramMetadata) -> Program {
  program.fold_with(&mut as_folder(TransformVisitor::new(metadata.comments)))
}

#[cfg(test)]
mod tests {
  use super::*;
  use swc_core::ecma::transforms::testing::test_inline;

  test_inline!(
    Default::default(),
    |_| as_folder(TransformVisitor::new(None)),
    import_and_use,
    r#"
    import { styled, css, keyframes } from "next-yak";
    import { Icon } from "./Icon";
    const primary = "green";
    const Button = styled.button`
        font-size: 1rem;
        color: ${primary};
        ${Icon} {
            ${({$active}) => $active && css`color: red`}
            padding: 1rem;

            ${({$active}) => $active ? null : css`
                ${({$hover}) => $hover && css`color: blue`}
            `}
        }
    `;
    const Animation = keyframes`
        from { color: red; }
        to { color: blue; }
    `;
    "#,
    r#"
    import { styled, css, keyframes } from "next-yak";
    import { Icon } from "./Icon";
    const primary = "green";
    const Button = styled.button`EXTRACTED`;
    const Animation = keyframes`EXTRACTED`;
    "#
  );

  test_inline!(
    Default::default(),
    |_| as_folder(TransformVisitor::new(None)),
    import_named_and_use,
    r#"
    import { styled as styledNamed } from "next-yak";
    const Button = styledNamed.button`color: red`;
    "#,
    r#"
    import { styled as styledNamed } from "next-yak";
    const Button = styledNamed.button`EXTRACTED`;
    "#
  );

  test_inline!(
    Default::default(),
    |_| as_folder(TransformVisitor::new(None)),
    ignore_another_lib,
    r#"
    import styled from "anotherlib";
    const Button = styled.button`color: red`;
    "#,
    r#"
    import styled from "anotherlib";
    const Button = styled.button`color: red`;
    "#
  );
}
