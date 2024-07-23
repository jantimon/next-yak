import { products } from "db/products";

type Params = {
	productId: string;
};

export async function GET(request: Request, context: { params: Params }) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	let filterHandles = products.map((product) => product.handle);

	const product = products.find((product) => product.id === context.params.productId);

	if (product?.handle === "acme-geometric-circles-t-shirt") {
		filterHandles = [
			"acme-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-hoodie",
			"acme-cap",
			"acme-baby-cap",
			"acme-baby-onesie",
			"acme-cup",
			"acme-rainbow-sticker",
			"acme-sticker",
			"acme-drawstring-bag"
		]
	}
	if (product?.handle === "acme-drawstring-bag") {
		filterHandles = [
			"acme-hoodie",
			"acme-cap",
			"acme-cup",
			"acme-bomber-jacket",
			"acme-baby-onesie",
			"acme-baby-cap",
			"acme-t-shirt",
			"acme-geometric-circles-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-pacifier"
		]
	}
	if (product?.handle === "acme-cup") {
		filterHandles = [
			"acme-mug",
			"acme-cap",
			"acme-hoodie",
			"acme-pacifier",
			"acme-baby-onesie",
			"acme-baby-cap",
			"acme-drawstring-bag",
			"acme-t-shirt",
			"acme-sticker",
			"acme-rainbow-prism-t-shirt"
		]
	}
	if (product?.handle === "acme-mug") {
		filterHandles = [
			"acme-cup",
			"acme-cap",
			"acme-hoodie",
			"acme-baby-onesie",
			"acme-pacifier",
			"acme-baby-cap",
			"acme-t-shirt",
			"acme-sticker",
			"acme-rainbow-prism-t-shirt",
			"acme-rainbow-sticker",
		]
	}
	if (product?.handle === "acme-hoodie") {
		filterHandles = [
			"acme-cap",
			"acme-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-geometric-circles-t-shirt",
			"acme-baby-onesie",
			"acme-bomber-jacket",
			"acme-baby-cap",
			"acme-cup",
			"acme-rainbow-sticker",
			"acme-sticker",
		]
	}
	if (product?.handle === "acme-baby-onesie") {
		filterHandles = [
			"acme-baby-cap",
			"acme-pacifier",
			"acme-hoodie",
			"acme-cap",
			"acme-geometric-circles-t-shirt",
			"acme-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-cup",
			"acme-drawstring-bag",
			"acme-mug",
		]
	}
	if (product?.handle === "acme-baby-cap") {
		filterHandles = [
			"acme-cap",
			"acme-baby-onesie",
			"acme-cowboy-hat",
			"acme-hoodie",
			"acme-pacifier",
			"acme-t-shirt",
			"acme-geometric-circles-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-rainbow-sticker",
			"acme-cup",
		]
	}

	return Response.json(filterHandles.map((handle) => {
		return products.find((product) => product.handle === handle);
	}).filter(Boolean));
}