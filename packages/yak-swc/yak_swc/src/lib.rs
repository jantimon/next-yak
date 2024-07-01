use css_in_js_parser::{parse_css, to_css};
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

pub struct TransformVisitor {
    next_yak_imports: HashMap<String, String>,
    current_css_state: Option<ParserState>,
    current_declaration: Vec<Declaration>,
    comments: Option<PluginCommentsProxy>,
}

impl TransformVisitor {
    fn new(comments: Option<PluginCommentsProxy>) -> Self {
        Self {
            next_yak_imports: HashMap::new(),
            current_css_state: None,
            current_declaration: vec![],
            comments,
        }
    }
}

impl VisitMut for TransformVisitor {
    // Visit the import declaration and store the imported names
    // That way we know if `styled`, `css` is imported from "next-yak"
    // and we can transpile their usages
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

    fn visit_mut_tagged_tpl(&mut self, n: &mut TaggedTpl) {
        if self.next_yak_imports.is_empty() {
            return;
        }

        // styled.button`color: red;`
        // keyframes`from { color: red; }`
        // css`color: red;`
        let template_literal_name: Option<String> = match &*n.tag {
            Expr::Ident(Ident { sym, .. }) => Some(sym.to_string()),
            Expr::Member(MemberExpr { obj, .. }) => {
                if let Expr::Ident(Ident { sym, .. }) = &**obj {
                    Some(sym.to_string())
                } else {
                    None
                }
            }
            _ => None,
        };

        // Only continue if the template literal is our own styled, css or keyframes
        if template_literal_name.is_none()
            || !self
                .next_yak_imports
                .contains_key(&template_literal_name.unwrap())
        {
            return;
        }

        let is_top_level = self.current_css_state.is_none();
        // Used for resetting the css state after processing all expressions
        let css_state_before = self.current_css_state.clone();
        // Current css parser state to parse an incomplete css code from a quasi
        let mut css_state = self.current_css_state.clone();

        // Every top-level css-in-js gathers its own css declarations
        if is_top_level {
            self.current_declaration = vec![];
        } else {
            // TODO add a custom css class name for nested css expressions to self.current_css_state
        }

        // Javascript Quasi (TplElement) and Expressions (Exprs) are interleaved
        // e.g. styled.button`color: ${primary};` => [TplElement, Expr, TplElement]
        for pair in n.tpl.quasis.iter().zip_longest(n.tpl.exprs.iter_mut()) {
            let quasi = pair.as_ref().left().unwrap();
            let (new_state, new_declarations) = parse_css(&quasi.raw, css_state);
            css_state = Some(new_state);
            // Add the extracted css declarations to the current css state
            self.current_declaration.extend(new_declarations);
            // store the current css state so we can use it in nested css expressions
            self.current_css_state = css_state.clone();

            // Expressions
            if let Some(expr) = pair.right() {
                // TODO: Handle constants
                // TODO: Handle selectors

                // Visit nested css expressions
                // e.g. styled.button`.foo { ${({$x}) => $x && css`color: red`}; }`
                expr.visit_mut_children_with(self);
            }
        }

        // revert to the css state before the current expression or literal
        self.current_css_state = css_state_before;

        dbg!(is_top_level);
        dbg!(to_css(&self.current_declaration));

        // Add the extracted CSS as a comment
        if is_top_level {
            {
                if let Some(comments) = &self.comments {
                    comments.add_leading(
                        n.tpl.span.lo,
                        Comment {
                            kind: swc_core::common::comments::CommentKind::Block,
                            span: DUMMY_SP,
                            text: to_css(&self.current_declaration).into(),
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

#[plugin_transform]
pub fn process_transform(program: Program, metadata: TransformPluginProgramMetadata) -> Program {
    program.fold_with(&mut as_folder(TransformVisitor::new(metadata.comments)))
}

// Tests
use swc_core::ecma::transforms::testing::test_inline;

test_inline!(
    Default::default(),
    |_| as_folder(TransformVisitor::new(None)),
    import_and_use,
    r#"
    import { styled, css } from "next-yak";
    const Button = styled.button`
        font-size: 1rem;
        .icon { 
            ${({$active}) => $active && css`color: red`} 
            padding: 1rem;
        }
    `;
    "#,
    r#"
    import { styled, css } from "next-yak";
    const Button = styled.button`EXTRACTED`;
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
