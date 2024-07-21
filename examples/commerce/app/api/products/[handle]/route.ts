import { products } from "db/products";

type Params = {
	handle: string;
};

export async function GET(request: Request, context: { params: Params }) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	return Response.json(products.find((product) => product.handle === context.params.handle));
}