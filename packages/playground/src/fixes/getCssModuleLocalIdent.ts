import type { LoaderContext } from "webpack";

let counter = 0;

export const getCssModuleLocalIdent = (context: LoaderContext<{}>, _: any, __: string, ___: object) => {
	return `${context.resourcePath}-${counter++}`;
}