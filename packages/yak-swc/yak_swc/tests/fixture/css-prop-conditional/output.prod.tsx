import { css, __yak_mergeCssProp } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const Elem = ()=>{
    const show = Math.random() > 0.5;
    return <div {.../*YAK Extracted CSS:
.Elem__show {
  color: red;
}
*/ /*#__PURE__*/ css(()=>show && /*#__PURE__*/ css(__styleYak.Elem__show), __styleYak.Elem)({})}/>;
};
const Elem2 = ()=>{
    const show = Math.random() > 0.5;
    return <div {...__yak_mergeCssProp({
        className: "test-class"
    }, /*YAK Extracted CSS:
.Elem2__show {
  color: red;
}
*/ /*#__PURE__*/ css(()=>show && /*#__PURE__*/ css(__styleYak.Elem2__show), __styleYak.Elem2)({}))}/>;
};
const Elem3 = ()=>{
    const show = Math.random() > 0.5;
    return <div {...__yak_mergeCssProp({
        style: {
            padding: "5px"
        }
    }, /*YAK Extracted CSS:
.Elem3__show {
  padding: 10px;
}
*/ /*#__PURE__*/ css(()=>show && /*#__PURE__*/ css(__styleYak.Elem3__show), __styleYak.Elem3)({}))}/>;
};
const Elem4 = (props: any)=>{
    const show = Math.random() > 0.5;
    return <div {...__yak_mergeCssProp({
        ...props
    }, /*YAK Extracted CSS:
.Elem4__show {
  color: green;
}
*/ /*#__PURE__*/ css(()=>show && /*#__PURE__*/ css(__styleYak.Elem4__show), __styleYak.Elem4)({}))}/>;
};
const Elem5 = (props: any)=>{
    return <div {...__yak_mergeCssProp({
        ...props.a,
        ...props.b
    }, /*YAK Extracted CSS:
.Elem5__props_show {
  color: purple;
}
*/ /*#__PURE__*/ css(()=>props.show && /*#__PURE__*/ css(__styleYak.Elem5__props_show), __styleYak.Elem5)({}))}/>;
};
const Elem6 = (props: any)=>{
    return <div {...__yak_mergeCssProp({
        className: "main",
        style: {
            fontWeight: "bold"
        }
    }, /*YAK Extracted CSS:
.Elem6__props_show {
  font-size: 16px;
}
*/ /*#__PURE__*/ css(()=>props.show && /*#__PURE__*/ css(__styleYak.Elem6__props_show), __styleYak.Elem6)({}))}/>;
};
const Elem7 = (props: any)=>{
    return <div {...__yak_mergeCssProp({
        className: "empty-css"
    }, /*#__PURE__*/ css(()=>props.show && /*#__PURE__*/ css(), __styleYak.Elem7)({}))}/>;
};
const Elem8 = ()=>{
    const show = Math.random() > 0.5;
    return <div {.../*YAK Extracted CSS:
.Elem8 {
  color: var(--ym7uBBu);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu": ()=>show && "red"
        }
    }, __styleYak.Elem8)({})}/>;
};
const Elem9 = ()=>{
    const show = Math.random() > 0.5;
    return <div {...__yak_mergeCssProp({
        className: "test-class"
    }, /*YAK Extracted CSS:
.Elem9 {
  color: var(--ym7uBBu1);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu1": ()=>show && "red"
        }
    }, __styleYak.Elem9)({}))}/>;
};
const Elem10 = ()=>{
    const show = Math.random() > 0.5;
    return <div {...__yak_mergeCssProp({
        style: {
            padding: "5px"
        }
    }, /*YAK Extracted CSS:
.Elem10 {
  padding: var(--ym7uBBu2);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu2": ()=>show && "10px"
        }
    }, __styleYak.Elem10)({}))}/>;
};
const Elem11 = (props: any)=>{
    const show = Math.random() > 0.5;
    return <div {...__yak_mergeCssProp({
        ...props
    }, /*YAK Extracted CSS:
.Elem11 {
  color: var(--ym7uBBu3);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu3": ()=>show && "green"
        }
    }, __styleYak.Elem11)({}))}/>;
};
const Elem12 = (props: any)=>{
    return <div {...__yak_mergeCssProp({
        ...props.a,
        ...props.b
    }, /*YAK Extracted CSS:
.Elem12 {
  color: var(--ym7uBBu4);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu4": ()=>props.show && "purple"
        }
    }, __styleYak.Elem12)({}))}/>;
};
const Elem13 = (props: any)=>{
    return <div {...__yak_mergeCssProp({
        className: "main",
        style: {
            fontWeight: "bold"
        }
    }, /*YAK Extracted CSS:
.Elem13 {
  font-size: var(--ym7uBBu5);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu5": ()=>props.show && "16px"
        }
    }, __styleYak.Elem13)({}))}/>;
};
const Elem14 = (props: any)=>{
    return <div {...__yak_mergeCssProp({
        className: "empty-css"
    }, /*YAK Extracted CSS:
.Elem14 {
  display: var(--ym7uBBu6);
}
*/ /*#__PURE__*/ css({
        "style": {
            "--ym7uBBu6": ()=>props.show && "block"
        }
    }, __styleYak.Elem14)({}))}/>;
};
const Elem15 = (props: any)=>{
    return <div {.../*YAK Extracted CSS:
.Elem15__props_a-and-props_b {
  color: var(--ym7uBBu7);
}
*/ /*#__PURE__*/ css(()=>props.a && /*#__PURE__*/ css(__styleYak.Elem15__props_a, ()=>props.b && /*#__PURE__*/ css(__styleYak["Elem15__props_a-and-props_b"], {
                "style": {
                    "--ym7uBBu7": ()=>props.c && "orange"
                }
            })), __styleYak.Elem15)({})}/>;
};
