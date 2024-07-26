import { products } from "db/products";

export async function GET(request: Request) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const { searchParams } = new URL(request.url);

	if (!searchParams.has('collection')) {
		return Response.json(products);
	}

	const collection = searchParams.get('collection');
	let filterHandles = products.map((product) => product.handle);

	if (collection === 'hidden-homepage-carousel') {
		filterHandles = [
			"acme-mug",
			"acme-hoodie",
			"acme-baby-onesie",
			"acme-baby-cap",
		]
	}
	if (collection === 'hidden-homepage-grid') {
		filterHandles = [
			"acme-geometric-circles-t-shirt",
			"acme-drawstring-bag",
			"acme-cup",
		]
	}
	if (collection === 'bags') {
		filterHandles = [
			"acme-drawstring-bag",
		]
	}
	if (collection === 'drinkware') {
		filterHandles = [
			"acme-mug",
			"acme-cup",
		]
	}
	if (collection === 'electronics') {
		filterHandles = [
			"acme-mechanical-keyboard",
		]
	}
	if (collection === 'footware') {
		filterHandles = [
			"acme-slip-on-shoes",
		]
	}
	if (collection === 'headwear') {
		filterHandles = [
			"acme-baby-cap",
			"acme-cowboy-hat",
			"acme-cap",
		]
	}
	if (collection === 'hoodies') {
		filterHandles = [
			"acme-hoodie",
		]
	}
	if (collection === "jackets") {
		filterHandles = [
			"acme-bomber-jacket",
		]
	}
	if (collection === "kids") {
		filterHandles = [
			"acme-baby-cap",
			"acme-baby-onesie",
			"acme-pacifier",
		]
	}
	if (collection === "pets") {
		filterHandles = [
			"acme-dog-sweater",
		]
	}
	if (collection === "shirts") {
		filterHandles = [
			"acme-t-shirt",
			"acme-rainbow-prism-t-shirt",
			"acme-geometric-circles-t-shirt",
		]
	}
	if (collection === "stickers") {
		filterHandles = [
			"acme-sticker",
			"acme-rainbow-sticker",
		]
	}

	return Response.json(filterHandles.map(handle => products.find((product) => product.handle === handle)));
}
