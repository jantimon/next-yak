import { css } from "next-yak";

const Elem = () => <div css="invalid" />;
const Elem2 = (props: any) => <div css={props} />;
