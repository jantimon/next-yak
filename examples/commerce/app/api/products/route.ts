import { Product } from "lib/shopify/types";

const products = [{
	id: "1",
	handle: "acme-geometric-circles-t-shirt",
	availableForSale: true,
	title: "Acme Circles T-Shirt",
	description: "60% combed ringspun cotton/40% polyester jersey tee.",
	descriptionHtml: "<p>60% combed ringspun cotton/40% polyester jersey tee.</p>",
	options: [{
		id: "color",
		name: "Color",
		values: ["Black", "White", "Blue"],
	}, {
		id: "size",
		name: "Size",
		values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "20.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "20.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965&w=750&q=75",
		altText: "Acme Circles T-Shirt",
		width: 750,
		height: 750,
	},
	images: [],
	seo: {
		title: "Acme Circles T-Shirt",
		description: "60% combed ringspun cotton/40% polyester jersey tee.",
	},
	tags: ["t-shirt", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "2",
	handle: "acme-drawstring-bag",
	availableForSale: true,
	title: "Acme Drawstring Bag",
	description: "Strong 210D ripstop nylon drawstring bag Available in multiple sizes Easy-to-close durable drawstring Sturdy, reusable, and resilient",
	descriptionHtml: ` <ul>
	<li>Strong 210D ripstop nylon drawstring bag</li>
	<li>Available in multiple sizes</li>
	<li>Easy-to-close durable drawstring</li>
	<li>Sturdy, reusable, and resilient</li>
	</ul>`,
	options: [{
		id: "color",
		name: "Color",
		values: ["Black", "White"],
	}, {
		id: "size",
		name: "Size",
		values: ["6 x 8 inch", "7 x 9 inch", "8 x 11 inch", "9 x 12 inch", "10 x 15 inch", "12 x 16 inch"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "12.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "12.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304&w=1080&q=75",
		altText: "Acme Drawstring Bag",
		width: 1080,
		height: 1080,
	},
	images: [],
	seo: {
		title: "Acme Drawstring Bag",
		description: "Strong 210D ripstop nylon drawstring bag Available in multiple sizes Easy-to-close durable drawstring Sturdy, reusable, and resilient",
	},
	tags: ["bag", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "3",
	handle: "acme-cup",
	availableForSale: true,
	title: "Acme Cup",
	description: "12oz double wall ceramic body with a padded bottom.",
	descriptionHtml: "<p>12oz double wall ceramic body with a padded bottom.</p>",
	options: [{
		id: "color",
		name: "Color",
		values: ["Black", "White"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "15.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "15.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088&w=1080&q=75",
		altText: "Acme Cup",
		width: 1080,
		height: 1080,
	},
	images: [],
	seo: {
		title: "Acme Cup",
		description: "12oz double wall ceramic body with a padded bottom.",
	},
	tags: ["cup", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}] satisfies Product[];

// 4 products
const carouselProducts = [{
	id: "4",
	handle: "acme-mug",
	availableForSale: true,
	title: "Acme Mug",
	description: "12 oz Beck Cork-Bottom Mug.",
	descriptionHtml: "<p>12 oz Beck Cork-Bottom Mug.</p>",
	options: [],
	priceRange: {
		maxVariantPrice: {
			amount: "15.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "15.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527&w=1080&q=75",
		altText: "Acme Mug",
		width: 1080,
		height: 1080,
	},
	images: [],
	seo: {
		title: "Acme Mug",
		description: "12 oz Beck Cork-Bottom Mug.",
	},
	tags: ["mug", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "5",
	handle: "acme-hoodie",
	availableForSale: true,
	title: "Acme Hoodie",
	description: "Fabric blend of Supima Cotton and Micromodal.",
	descriptionHtml: "<p>Fabric blend of Supima Cotton and Micromodal.</p>",
	options: [{
		id: "size",
		name: "Size",
		values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "50.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "50.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482&w=1080&q=75",
		altText: "Acme Hoodie",
		width: 1080,
		height: 1080,
	},
	images: [],
	seo: {
		title: "Acme Hoodie",
		description: "Fabric blend of Supima Cotton and Micromodal.",
	},
	tags: ["hoodie", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "6",
	handle: "acme-baby-onesie",
	availableForSale: true,
	title: "Acme Baby Onesie",
	description: "Short sleeve 5-oz, 100% combed ringspun cotton onesie",
	descriptionHtml: "<p>Short sleeve 5-oz, 100% combed ringspun cotton onesie</p>",
	options: [{
		id: "size",
		name: "Size",
		values: ["NB", "3M", "6M", "12M", "18M", "24M"],
	}, {
		id: "color",
		name: "Color",
		values: ["Black", "White", "Beige"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "10.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "10.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 1080,
		height: 1080,
	},
	images: [],
	seo: {
		title: "Acme Baby Onesie",
		description: "Short sleeve 5-oz, 100% combed ringspun cotton onesie",
	},
	tags: ["onesie", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "7",
	handle: "acme-baby-cap",
	availableForSale: true,
	title: "Acme Baby Cap",
	description: "100% combed ringspun cotton",
	descriptionHtml: "<p>100% combed ringspun cotton</p>",
	options: [{
		id: "color",
		name: "Color",
		values: ["Black", "Gray", "White"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "10.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "10.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570&w=1080&q=75",
		altText: "Acme Baby Cap",
		width: 1080,
		height: 1080,
	},
	images: [],
	seo: {
		title: "Acme Baby Cap",
		description: "100% combed ringspun cotton",
	},
	tags: ["cap", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}] satisfies Product[];



export async function GET(request: Request) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const { searchParams } = new URL(request.url);

	if (searchParams.has('collection')) {
		const collection = searchParams.get('collection');
		if (collection === 'hidden-homepage-carousel') {
			return Response.json(carouselProducts);
		}
	}

	return Response.json(products);
}
