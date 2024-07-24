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
	if (product?.handle === "acme-slip-on-shoes") {
		filterHandles = [
			"acme-hoodie",
			"acme-cap",
			"acme-cup",
			"acme-t-shirt",
			"acme-baby-onesie",
			"acme-bomber-jacket",
			"acme-rainbow-prism-t-shirt",
			"acme-geoemtric-circles-t-shirt",
			"acme-baby-cap",
			"acme-pacifier",
		]
	}
	if (product?.handle === "acme-mechanical-keyboard") {
		filterHandles = [
			"acme-sticker",
			"acme-cap",
			"acme-cup",
			"acme-rainbow-sticker",
			"acme-baby-cap",
			"acme-hoodie",
			"acme-pacifier",
			"acme-t-shirt",
			"acme-baby-onesie",
		]
	}
	if (product?.handle === "acme-rainbow-prism-t-shirt") {
		filterHandles = [
			"acme-t-shirt",
			"acme-geometric-circles-t-shirt",
			"acme-hoodie",
			"acme-cap",
			"acme-baby-onesie",
			"acme-baby-cap",
			"acme-cup",
			"acme-rainbow-sticker",
			"acme-drawstring-bag",
			"acme-mug",
		]
	}
	if (product?.handle === "acme-t-shirt") {
		filterHandles = [
			"acme-geometric-circles-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-hoodie",
			"acme-cap",
			"acme-baby-cap",
			"acme-baby-onesie",
			"acme-cup",
			"acme-sticker",
			"acme-rainbow-sticker",
			"acme-drawstring-bag",
		]
	}
	if (product?.handle === "acme-sticker") {
		filterHandles = [
			"acme-rainbow-sticker",
			"acme-hoodie",
			"acme-cap",
			"acme-cup",
			"acme-baby-cap",
			"acme-t-shirt",
			"acme-pacifier",
			"acme-baby-onesie",
			"acme-geometric-circles-t-shirt",
			"acme-mug",
		]
	}
	if (product?.handle === "acme-rainbow-sticker") {
		filterHandles = [
			"acme-sticker",
			"acme-hoodie",
			"acme-cap",
			"acme-baby-cap",
			"acme-baby-onesie",
			"acme-t-shirt",
			"acme-cup",
			"acme-geometric-circles-t-shirt",
			"acme-pacifier",
			"acme-rainbow-prism-t-shirt",
		]
	}
	if (product?.handle === "acme-pacifier") {
		filterHandles = [
			"acme-baby-onesie",
			"acme-baby-cap",
			"acme-cup",
			"acme-cap",
			"acme-hoodie",
			"acme-sticker",
			"acme-mug",
			"acme-rainbow-sticker",
			"acme-drawstring-bag",
			"acme-t-shirt",
		]
	}
	if (product?.handle === "acme-cap") {
		filterHandles = [
			"acme-baby-cap",
			"acme-hoodie",
			"acme-cowboy-hat",
			"acme-cup",
			"acme-t-shirt",
			"acme-baby-onesie",
			"acme-geometric-circles-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-sticker",
			"acme-rainbow-sticker",
		]
	}
	if (product?.handle === "acme-dog-sweater") {
		filterHandles = [
			"acme-hoodie",
			"acme-bomber-jacket",
			"acme-cap",
			"acme-baby-onesie",
			"acme-t-shirt",
			"acme-pacifier",
			"acme-rainbow-prism-t-shirt",
			"acme-geometric-circles-t-shirt",
			"acme-baby-cap",
			"acme-cup",
		]
	}
	if (product?.handle === "acme-cowboy-hat") {
		filterHandles = [
			"acme-cap",
			"acme-baby-cap",
			"acme-hoodie",
			"acme-cup",
			"acme-t-shirt",
			"acme-baby-onesie",
			"acme-geometric-circles-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-bomber-jacket",
			"acme-mug",
		]
	}
	if (product?.handle === "acme-bomber-jacket") {
		filterHandles = [
			"acme-hoodie",
			"acme-cap",
			"acme-drawstring-bag",
			"acme-baby-onesie",
			"acme-do-sweater",
			"acme-baby-cap",
			"acme-cup",
			"acme-t-shirt",
			"acme-slip-on-shoes",
			"acme-geometric-circles-t-shirt",
		]
	}

	return Response.json(filterHandles.map((handle) => {
		return products.find((product) => product.handle === handle);
	}).filter(Boolean));
}