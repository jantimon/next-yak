use css_in_js_parser::{parse_css, to_css};

fn main() {
  let css = r#"
        .button {
            color: blue;
            &:hover {
                color: red;
            }
        }
    "#;

  let (_, declarations) = parse_css(css, None);
  println!("Parsed declarations: {:?}", declarations);

  let regenerated_css = to_css(&declarations);
  println!("Regenerated CSS:\n{}", regenerated_css);
}
