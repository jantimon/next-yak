import { carouselProducts, gridProducts, products } from "db/products";
import { Product } from "lib/shopify/types";





export async function GET(request: Request) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const { searchParams } = new URL(request.url);

	if (searchParams.has('collection')) {
		const collection = searchParams.get('collection');
		if (collection === 'hidden-homepage-carousel') {
			return Response.json(carouselProducts);
		}
		return Response.json(gridProducts);
	}

	return Response.json(products);
}
