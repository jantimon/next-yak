use std::sync::Arc;

use swc::{config::IsModule, try_with_handler, Compiler};
use swc_common::{FileName, SourceMap};
use swc_core::ecma::visit::{as_folder, FoldWith};
use yak_swc::TransformVisitor;

fn main() {
  let cm = Arc::<SourceMap>::default();
  let c = Compiler::new(cm.clone());

  try_with_handler(cm.clone(), Default::default(), |handler| {
    let fm = cm.new_source_file(
      FileName::Custom("test.ts".into()),
      r#"
import { styled, css } from "next-yak";
const Button = styled.button`
    font-size: 1rem;
    .icon {
        ${({$active}) => $active && css`color: red`}
        padding: 1rem;
    }
`;"#
        .into(),
    );

    let program = c
      .parse_js(
        fm,
        handler,
        Default::default(),
        Default::default(),
        IsModule::Bool(true),
        None,
      )
      .unwrap();

    let _transformed = program.fold_with(&mut as_folder(TransformVisitor::new(None)));

    Ok(())
  })
  .unwrap();
}
