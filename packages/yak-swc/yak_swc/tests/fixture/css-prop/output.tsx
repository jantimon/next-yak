import { css, __yak_mergeCssProp } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const Elem = ()=><div {.../*YAK Extracted CSS:
.Elem {
  color: red;
}
*/ /*#__PURE__*/ css("Elem")({})}/>;
const Elem2 = ()=><div {...__yak_mergeCssProp({
        className: "test-class"
    }, /*YAK Extracted CSS:
.Elem2 {
  color: blue;
}
*/ /*#__PURE__*/ css("Elem2")({}))}/>;
const Elem3 = ()=><div {...__yak_mergeCssProp({
        style: {
            padding: "5px"
        }
    }, /*YAK Extracted CSS:
.Elem3 {
  padding: 10px;
}
*/ /*#__PURE__*/ css("Elem3")({}))}/>;
const Elem4 = (props: any)=><div {...__yak_mergeCssProp({
        ...props
    }, /*YAK Extracted CSS:
.Elem4 {
  color: green;
}
*/ /*#__PURE__*/ css("Elem4")({}))}/>;
const Elem5 = (props: any)=><div {...__yak_mergeCssProp({
        ...props.a,
        ...props.b
    }, /*YAK Extracted CSS:
.Elem5 {
  color: purple;
}
*/ /*#__PURE__*/ css("Elem5")({}))}/>;
const Elem6 = ()=><div {...__yak_mergeCssProp({
        className: "main",
        style: {
            fontWeight: "bold"
        }
    }, /*YAK Extracted CSS:
.Elem6 {
  font-size: 16px;
}
*/ /*#__PURE__*/ css("Elem6")({}))}/>;
const Elem7 = ()=><div className="no-css"/>;
const Elem8 = ()=><div {...__yak_mergeCssProp({
        className: "empty-css"
    }, /*#__PURE__*/ css("Elem8")({}))}/>;
