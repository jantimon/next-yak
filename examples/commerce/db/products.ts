import { Product } from "lib/shopify/types";

export const gridProducts: Product[] = [{
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
	variants: [{
		id: "1",
		title: "Acme Circles T-Shirt - Black - XS",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "Black",
		}, {
			name: "Size",
			value: "XS",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}, {
		id: "2",
		title: "Acme Circles T-Shirt - Black - S",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "Black",
		}, {
			name: "Size",
			value: "S",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "3",
		title: "Acme Circles T-Shirt - Black - L",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "Black",
		}, {
			name: "Size",
			value: "L",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "4",
		title: "Acme Circles T-Shirt - Black - XL",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "Black",
		}, {
			name: "Size",
			value: "XL",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "5",
		title: "Acme Circles T-Shirt - Black - XXL",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "Black",
		}, {
			name: "Size",
			value: "XXL",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "6",
		title: "Acme Circles T-Shirt - Black - XXXL",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "Black",
		}, {
			name: "Size",
			value: "XXXL",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "7",
		title: "Acme Circles T-Shirt - White - XS",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "White",
		}, {
			name: "Size",
			value: "XS",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "8",
		title: "Acme Circles T-Shirt - White - S",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "White",
		}, {
			name: "Size",
			value: "S",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "9",
		title: "Acme Circles T-Shirt - White - M",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "White",
		}, {
			name: "Size",
			value: "M",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "10",
		title: "Acme Circles T-Shirt - White - XL",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "White",
		}, {
			name: "Size",
			value: "XL",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "11",
		title: "Acme Circles T-Shirt - White - XXL",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "White",
		}, {
			name: "Size",
			value: "XXL",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	},
	{
		id: "12",
		title: "Acme Circles T-Shirt - White - XXXL",
		availableForSale: true,
		selectedOptions: [{
			name: "Color",
			value: "White",
		}, {
			name: "Size",
			value: "XXXL",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965&w=750&q=75",
		altText: "Acme Circles T-Shirt",
		width: 750,
		height: 750,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965&w=750&q=75",
		altText: "Acme Circles T-Shirt",
		width: 750,
		height: 750,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-2.png?v=1689798965&w=1080&q=75",
		altText: "Acme Circles T-Shirt",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-circles-blue.png?v=1690003396&w=1080&q=75",
		altText: "Acme Circles T-Shirt",
		width: 1080,
		height: 1080,
	}],
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
	variants: [
		{
			id: "1",
			title: "Acme Drawstring Bag - Black - 7 x 9 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 x 9 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Drawstring Bag - Black - 8 x 11 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "8 x 11 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Drawstring Bag - Black - 9 x 12 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "9 x 12 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme Drawstring Bag - Black - 10 x 15 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "10 x 15 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "5",
			title: "Acme Drawstring Bag - Black - 12 x 16 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "12 x 16 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			},
		},
		{
			id: "6",
			title: "Acme Drawstring Bag - White - 6 x 8 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "6 x 8 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "7",
			title: "Acme Drawstring Bag - White - 7 x 9 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "7 x 9 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "8",
			title: "Acme Drawstring Bag - White - 8 x 11 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "8 x 11 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "9",
			title: "Acme Drawstring Bag - White - 9 x 12 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "9 x 12 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			}
		},
		{
			id: "10",
			title: "Acme Drawstring Bag - White - 10 x 15 inch",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "10 x 15 inch",
			}],
			price: {
				amount: "12.00",
				currencyCode: "USD",
			},
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304&w=1080&q=75",
		altText: "Acme Drawstring Bag",
		width: 1080,
		height: 1080,
	},
	images: [
		{
			url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304&w=1080&q=75",
			altText: "Acme Drawstring Bag",
			width: 1080,
			height: 1080,
		},
		{
			url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-light.png?v=1689796304&w=1080&q=75",
			altText: "Acme Drawstring Bag",
			width: 1080,
			height: 1080,
		}
	],
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
	variants: [
		{
			id: "1",
			title: "Acme Cup - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "15.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Cup - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "15.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088&w=1080&q=75",
		altText: "Acme Cup",
		width: 1080,
		height: 1080,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088&w=1080&q=75",
		altText: "Acme Cup",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-white.png?v=1690003088&w=1080&q=75",
		altText: "Acme Cup",
		width: 1080,
		height: 1080,
	}],
	seo: {
		title: "Acme Cup",
		description: "12oz double wall ceramic body with a padded bottom.",
	},
	tags: ["cup", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}] satisfies Product[];

export const carouselProducts: Product[] = [{
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
	variants: [{
		id: "1",
		title: "Acme Mug",
		availableForSale: true,
		selectedOptions: [],
		price: {
			amount: "15.00",
			currencyCode: "USD",
		}
	}],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527&w=1080&q=75",
		altText: "Acme Mug",
		width: 1080,
		height: 1080,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527&w=1080&q=75",
		altText: "Acme Mug",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-2.png?v=1690003527&w=1080&q=75",
		altText: "Acme Mug",
		width: 1080,
		height: 1080,
	}],
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
	// xs, s, m, l, xl, xxl, xxxl
	variants: [{
		id: "1",
		title: "Acme Hoodie - XS",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "XS",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	},
	{
		id: "2",
		title: "Acme Hoodie - S",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "S",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	},
	{
		id: "3",
		title: "Acme Hoodie - M",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "M",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	},
	{
		id: "4",
		title: "Acme Hoodie - L",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "L",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	},
	{
		id: "5",
		title: "Acme Hoodie - XL",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "XL",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	},
	{
		id: "6",
		title: "Acme Hoodie - XXL",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "XXL",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	},
	{
		id: "7",
		title: "Acme Hoodie - XXXL",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "XXXL",
		}],
		price: {
			amount: "50.00",
			currencyCode: "USD",
		}
	}
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482&w=1080&q=75",
		altText: "Acme Hoodie",
		width: 1080,
		height: 1080,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482&w=1080&q=75",
		altText: "Acme Hoodie",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-2.png?v=1690003482&w=1080&q=75",
		altText: "Acme Hoodie",
		width: 1080,
		height: 1080,
	}],
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
	variants: [
		{
			id: "1",
			title: "Acme Baby Onesie - NB - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "NB",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Baby Onesie - NB - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "NB",
			}, {
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Baby Onesie - NB - Beige",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "NB",
			}, {
				name: "Color",
				value: "Beige",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme Baby Onesie - 3M - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "3M",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "5",
			title: "Acme Baby Onesie - 3M - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "3M",
			}, {
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "6",
			title: "Acme Baby Onesie - 3M - Beige",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "3M",
			}, {
				name: "Color",
				value: "Beige",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "7",
			title: "Acme Baby Onesie - 6M - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "6M",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "8",
			title: "Acme Baby Onesie - 6M - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "6M",
			}, {
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "9",
			title: "Acme Baby Onesie - 6M - Beige",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "6M",
			}, {
				name: "Color",
				value: "Beige",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "10",
			title: "Acme Baby Onesie - 12M - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "12M",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "11",
			title: "Acme Baby Onesie - 12M - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "12M",
			}, {
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "12",
			title: "Acme Baby Onesie - 12M - Beige",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "12M",
			}, {
				name: "Color",
				value: "Beige",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "13",
			title: "Acme Baby Onesie - 18M - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "18M",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "14",
			title: "Acme Baby Onesie - 18M - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "18M",
			}, {
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "15",
			title: "Acme Baby Onesie - 18M - Beige",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "18M",
			}, {
				name: "Color",
				value: "Beige",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "16",
			title: "Acme Baby Onesie - 24M - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "24M",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "17",
			title: "Acme Baby Onesie - 24M - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "24M",
			}, {
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "18",
			title: "Acme Baby Onesie - 24M - Beige",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "24M",
			}, {
				name: "Color",
				value: "Beige",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		}
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 1080,
		height: 1080,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-2.png?v=1690002631&w=1200&q=75",
		altText: "Acme Baby Onesie",
		width: 514,
		height: 514,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-black-1.png?v=1690002631&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-black-2.png?v=1690002632&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 514,
		height: 514,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-white-1.png?v=1690002631&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-white-2.png?v=1690002631&w=1080&q=75",
		altText: "Acme Baby Onesie",
		width: 514,
		height: 514,
	}],
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
	variants: [
		{
			id: "1",
			title: "Acme Baby Cap - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Baby Cap - Gray",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Gray",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Baby Cap - White",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		}
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570&w=1080&q=75",
		altText: "Acme Baby Cap",
		width: 1080,
		height: 1080,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570&w=1080&q=75",
		altText: "Acme Baby Cap",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-gray.png?v=1690002570&w=1080&q=75",
		altText: "Acme Baby Cap",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-white.png?v=1690002570&w=1080&q=75",
		altText: "Acme Baby Cap",
		width: 1080,
		height: 1080,
	}],
	seo: {
		title: "Acme Baby Cap",
		description: "100% combed ringspun cotton",
	},
	tags: ["cap", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}] satisfies Product[];

const otherProducts: Product[] = [{
	id: "8",
	handle: "acme-t-shirt",
	availableForSale: true,
	title: "Acme T-Shirt",
	description: "60% combed ringspun cotton/40% polyester jersey tee.",
	descriptionHtml: "<p>60% combed ringspun cotton/40% polyester jersey tee.</p>",
	options: [{
		id: "color",
		name: "Color",
		values: ["Black", "Blue", "Gray", "Pink", "White"],
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
	variants: [
		{
			id: "1",
			title: "Acme T-Shirt - Black - S",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "S",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme T-Shirt - Black - M",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "M",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme T-Shirt - Black - L",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "L",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme T-Shirt - Black - XL",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "XL",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "5",
			title: "Acme T-Shirt - Black - XXL",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "XXL",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "6",
			title: "Acme T-Shirt - Blue - S",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Blue",
			}, {
				name: "Size",
				value: "S",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "7",
			title: "Acme T-Shirt - Blue - M",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Blue",
			}, {
				name: "Size",
				value: "M",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "8",
			title: "Acme T-Shirt - Blue - L",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Blue",
			}, {
				name: "Size",
				value: "L",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "9",
			title: "Acme T-Shirt - Blue - XL",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Blue",
			}, {
				name: "Size",
				value: "XL",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "10",
			title: "Acme T-Shirt - Blue - XXL",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Blue",
			}, {
				name: "Size",
				value: "XXL",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "11",
			title: "Acme T-Shirt - Gray - M",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Gray",
			}, {
				name: "Size",
				value: "M",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "12",
			title: "Acme T-Shirt - White - S",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "S",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "13",
			title: "Acme T-Shirt - White - M",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "M",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "14",
			title: "Acme T-Shirt - White - L",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "L",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "15",
			title: "Acme T-Shirt - White - XL",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "XL",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
		{
			id: "16",
			title: "Acme T-Shirt - White - XXL",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "White",
			}, {
				name: "Size",
				value: "XXL",
			}],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675&w=1200&q=75",
		altText: "Acme T-Shirt",
		width: 1000,
		height: 1000,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675&w=1200&q=75",
		altText: "Acme T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-blue.png?v=1690003675&w=1200&q=75",
		altText: "Acme T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-gray.png?v=1690003676&w=1200&q=75",
		altText: "Acme T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-pink.png?v=1690003675&w=1200&q=75",
		altText: "Acme T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-white.png?v=1690003675&w=1200&q=75",
		altText: "Acme T-Shirt",
		width: 1000,
		height: 1000,
	}],
	seo: {
		title: "Acme T-Shirt",
		description: "60% combed ringspun cotton/40% polyester jersey tee.",
	},
	tags: ["t-shirt", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "9",
	handle: "acme-rainbow-prism-t-shirt",
	availableForSale: true,
	title: "Acme Prism T-Shirt",
	description: "60% combed ringspun cotton/40% polyester jersey tee.",
	descriptionHtml: "<p>60% combed ringspun cotton/40% polyester jersey tee.</p>",
	options: [{
		id: "size",
		name: "Size",
		values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "25.00",
			currencyCode: "USD",
		},

		minVariantPrice: {
			amount: "25.00",
			currencyCode: "USD",
		},
	},
	variants: [
		{
			id: "1",
			title: "Acme Prism T-Shirt - XS",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XS",
			}],
			price: {
				amount: "25.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Prism T-Shirt - M",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "M",
			}],
			price: {
				amount: "25.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Prism T-Shirt - XL",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XL",
			}],
			price: {
				amount: "25.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme Prism T-Shirt - XXXL",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XXXL",
			}],
			price: {
				amount: "25.00",
				currencyCode: "USD",
			}
		}
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-1.png?v=1690003571&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1000,
		height: 1000,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-1.png?v=1690003571&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-2.png?v=1690003571&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-3.png?v=1690003571&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-4.png?v=1690003572&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1000,
		height: 1000,
	}],
	seo: {
		title: "Acme Prism T-Shirt",
		description: "60% combed ringspun cotton/40% polyester jersey tee.",
	},
	tags: ["t-shirt", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "10",
	handle: "acme-cap",
	availableForSale: true,
	title: "Acme Cap",
	description: "100% peach-washed cotton.",
	descriptionHtml: "<p>100% peach-washed cotton.</p>",
	options: [],
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
	variants: [
		{
			id: "1",
			title: "Acme Cap",
			availableForSale: true,
			selectedOptions: [],
			price: {
				amount: "20.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-1.png?v=1690002833&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1200,
		height: 1200,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-1.png?v=1690002833&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1200,
		height: 1200,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-2.png?v=1690002833&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1200,
		height: 1200,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-3.png?v=1690002833&w=1200&q=75",
		altText: "Acme Prism T-Shirt",
		width: 1200,
		height: 1200,
	}],
	seo: {
		title: "Acme Cap",
		description: "100% peach-washed cotton.",
	},
	tags: ["cap", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "11",
	handle: "acme-rainbow-sticker",
	availableForSale: true,
	title: "Acme Rainbow Sticker",
	description: "",
	descriptionHtml: "",
	options: [],
	priceRange: {
		maxVariantPrice: {
			amount: "4.00",
			currencyCode: "USD",
		},
		minVariantPrice: {
			amount: "4.00",
			currencyCode: "USD",
		},
	},
	variants: [
		{
			id: "1",
			title: "Acme Rainbow Sticker",
			availableForSale: true,
			selectedOptions: [],
			price: {
				amount: "4.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker-rainbow.png?v=1690003602&w=1200&q=75",
		altText: "Acme Rainbow Sticker",
		width: 900,
		height: 900,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker-rainbow.png?v=1690003602&w=1200&q=75",
		altText: "Acme Rainbow Sticker",
		width: 900,
		height: 900,
	}],
	seo: {
		title: "Acme Rainbow Sticker",
		description: "",
	},
	tags: ["sticker", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "12",
	handle: "acme-sticker",
	availableForSale: true,
	title: "Acme Sticker",
	description: "",
	descriptionHtml: "",
	options: [],
	priceRange: {
		maxVariantPrice: {
			amount: "4.00",
			currencyCode: "USD",
		},
		minVariantPrice: {
			amount: "4.00",
			currencyCode: "USD",
		},
	},
	variants: [
		{
			id: "1",
			title: "Acme Sticker",
			availableForSale: true,
			selectedOptions: [],
			price: {
				amount: "4.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619&w=1200&q=75",
		altText: "Acme Sticker",
		width: 1200,
		height: 1200,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619&w=1200&q=75",
		altText: "Acme Sticker",
		width: 1200,
		height: 1200,
	}],
	seo: {
		title: "Acme Sticker",
		description: "",
	},
	tags: ["sticker", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "13",
	handle: "acme-bomber-jacket",
	availableForSale: true,
	title: "Acme Bomber Jacket",
	description: "The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.",
	descriptionHtml: "<p>The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.</p>",
	options: [{
		id: "size",
		name: "Size",
		values: ["XS", "S", "M", "L", "XL", "XXL"],
	}, {
		id: "color",
		name: "Color",
		values: ["Army", "Black"],
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
	// size x color
	variants: [
		{
			id: "1",
			title: "Acme Bomber Jacket - XS - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XS",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Bomber Jacket - XS - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XS",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Bomber Jacket - S - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "S",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme Bomber Jacket - S - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "S",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "5",
			title: "Acme Bomber Jacket - M - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "M",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "6",
			title: "Acme Bomber Jacket - M - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "M",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "7",
			title: "Acme Bomber Jacket - L - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "L",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "8",
			title: "Acme Bomber Jacket - L - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "L",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "9",
			title: "Acme Bomber Jacket - XL - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XL",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "10",
			title: "Acme Bomber Jacket - XL - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XL",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},

		{
			id: "11",
			title: "Acme Bomber Jacket - XXL - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XXL",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "12",
			title: "Acme Bomber Jacket - XXL - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XXL",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "13",
			title: "Acme Bomber Jacket - XXXL - Army",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XXXL",
			}, {
				name: "Color",
				value: "Army",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
		{
			id: "14",
			title: "Acme Bomber Jacket - XXXL - Black",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "XXXL",
			}, {
				name: "Color",
				value: "Black",
			}],
			price: {
				amount: "50.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bomber-jacket-army.png?v=1690002722&w=1200&q=75",
		altText: "Acme Bomber Jacket",
		width: 1000,
		height: 1000,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bomber-jacket-army.png?v=1690002722&w=1200&q=75",
		altText: "Acme Bomber Jacket",
		width: 1000,
		height: 1000,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bomber-jacket-black.png?v=1690002722&w=1200&q=75",
		altText: "Acme Bomber Jacket",
		width: 1000,
		height: 1000,
	}],
	seo: {
		title: "Acme Bomber Jacket",
		description: "The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.",
	},
	tags: ["jacket", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "14",
	handle: "acme-pacifier",
	availableForSale: true,
	title: "Acme Pacifier",
	description: "This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.",
	descriptionHtml: "<p>This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.</p>",
	options: [],
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
	variants: [
		{
			id: "1",
			title: "Acme Pacifier",
			availableForSale: true,
			selectedOptions: [],
			price: {
				amount: "10.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/pacifier-1.png?v=1690003544&w=1200&q=75",
		altText: "Acme Pacifier",
		width: 600,
		height: 600,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/pacifier-1.png?v=1690003544&w=1200&q=75",
		altText: "Acme Pacifier",
		width: 600,
		height: 600,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/pacifier-2.png?v=1690003544&w=1200&q=75",
		altText: "Acme Pacifier",
		width: 1200,
		height: 1200,
	}],
	seo: {
		title: "Acme Pacifier",
		description: "This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.",
	},
	tags: ["pacifier", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "15",
	handle: "acme-cowboy-hat",
	availableForSale: true,
	title: "Acme Cowboy Hat",
	description: "Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt.",
	descriptionHtml: `<p>Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt. Its classic Western profile features a classic cattleman crease, a 4" brim and a 4 1/2" regular oval crown. Additional details include a leather sweatband, satin lining, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box.</p>
	<ul>
		<li>4" Brim</li>
		<li>4 1/2" Regular Oval Crown</li>
		<li>Cattleman Crease</li>
		<li>Self-Matching Hat Band</li>
		<li>3-Piece Silver Buckle Set</li>
		<li>Hat Box</li>
		<li>4X Wool Felt Construction</li>
		<li>American Buffalo Collection</li>
		<li>Made in the USA</li>
		</ul>`,
	options: [{
		id: "color",
		name: "Color",
		values: ["Black", "Tan"],
	}, {
		id: "size",
		name: "Size",
		values: ["6 3/4", "6 7/8", "7", "7 1/8", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "160.00",
			currencyCode: "USD",
		},
		minVariantPrice: {
			amount: "160.00",
			currencyCode: "USD",
		},
	},
	// color x size
	variants: [
		{
			id: "1",
			title: "Acme Cowboy Hat - Black - 6 3/4",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "6 3/4",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Cowboy Hat - Black - 6 7/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "6 7/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Cowboy Hat - Black - 7",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme Cowboy Hat - Black - 7 1/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 1/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "5",
			title: "Acme Cowboy Hat - Black - 7 1/4",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 1/4",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "6",
			title: "Acme Cowboy Hat - Black - 7 3/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 3/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "7",
			title: "Acme Cowboy Hat - Black - 7 1/2",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 1/2",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "8",
			title: "Acme Cowboy Hat - Black - 7 5/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 5/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "9",
			title: "Acme Cowboy Hat - Black - 7 3/4",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Black",
			}, {
				name: "Size",
				value: "7 3/4",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			}
		},
		{
			id: "10",
			title: "Acme Cowboy Hat - Tan - 6 3/4",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "6 3/4",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "11",
			title: "Acme Cowboy Hat - Tan - 6 7/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "6 7/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "12",
			title: "Acme Cowboy Hat - Tan - 7",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "13",
			title: "Acme Cowboy Hat - Tan - 7 1/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7 1/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "14",
			title: "Acme Cowboy Hat - Tan - 7 1/4",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7 1/4",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "15",
			title: "Acme Cowboy Hat - Tan - 7 3/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7 3/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "16",
			title: "Acme Cowboy Hat - Tan - 7 1/2",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7 1/2",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "17",
			title: "Acme Cowboy Hat - Tan - 7 5/8",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7 5/8",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
		{
			id: "18",
			title: "Acme Cowboy Hat - Tan - 7 3/4",
			availableForSale: true,
			selectedOptions: [{
				name: "Color",
				value: "Tan",
			}, {
				name: "Size",
				value: "7 3/4",
			}],
			price: {
				amount: "160.00",
				currencyCode: "USD",
			},
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-1.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-1.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-2.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-3.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-4.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-5.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-6.png?v=1690208765&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-tan-1.png?v=1690208858&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-tan-2.png?v=1690208858&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-tan-3.png?v=1690208858&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-tan-4.png?v=1690208858&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-tan-5.png?v=1690208858&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/products/cowboy-hat-tan-6.png?v=1690208803&w=1200&q=75",
		altText: "Acme Cowboy Hat",
		width: 1080,
		height: 1080,
	}],
	seo: {
		title: "Acme Pacifier",
		description: "This line of pacifiers has been thoughtfully designed for your baby's comfort. The pacifier allows your child to self-soothe in the most natural way possible.",
	},
	tags: ["pacifier", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "16",
	handle: "acme-slip-on-shoes",
	availableForSale: true,
	title: "Acme Slip-On Shoes",
	description: "Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.",
	descriptionHtml: `<p>Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.</p>
	<p>Sleek, easy, and effortlessly stylish. Acme Slip-On Shoes are the ultimate get-up-and-go footwear. The low-profile slip-on canvas upper offers unbeatable convenience, while the clean design makes this all-white slip-on the perfect choice for anyone with places to go and things to do. One of the most popular designs, these shoes are the perfect middle ground between style and convenience.</p>
	<ul>
		<li>Iconic slip-on shoe</li>
		<li>Low profile canvas uppers</li>
		<li>Supportive padded collars</li>
		<li>Elastic side accents</li>
		<li>Signature rubber waffle outsoles</li>
		</ul>`,
	options: [{
		id: "size",
		name: "Size",
		values: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"],
	}],
	priceRange: {
		maxVariantPrice: {
			amount: "45.00",
			currencyCode: "USD",
		},
		minVariantPrice: {
			amount: "45.00",
			currencyCode: "USD",
		},
	},
	// all but 2.5, 5.5, 6, 10.5
	variants: [
		{
			id: "1",
			title: "Acme Slip-On Shoes - 1",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "1",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "2",
			title: "Acme Slip-On Shoes - 1.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "1.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "3",
			title: "Acme Slip-On Shoes - 2",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "2",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "4",
			title: "Acme Slip-On Shoes - 3",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "3",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "5",
			title: "Acme Slip-On Shoes - 3.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "3.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "6",
			title: "Acme Slip-On Shoes - 4",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "4",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "7",
			title: "Acme Slip-On Shoes - 4.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "4.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "8",
			title: "Acme Slip-On Shoes - 5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "9",
			title: "Acme Slip-On Shoes - 6.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "6.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "10",
			title: "Acme Slip-On Shoes - 7",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "7",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "11",
			title: "Acme Slip-On Shoes - 7.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "7.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "12",
			title: "Acme Slip-On Shoes - 8",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "8",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "13",
			title: "Acme Slip-On Shoes - 8.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "8.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "14",
			title: "Acme Slip-On Shoes - 9",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "9",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "15",
			title: "Acme Slip-On Shoes - 9.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "9.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "16",
			title: "Acme Slip-On Shoes - 10",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "10",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "17",
			title: "Acme Slip-On Shoes - 11",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "11",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "18",
			title: "Acme Slip-On Shoes - 11.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "11.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "19",
			title: "Acme Slip-On Shoes - 12",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "12",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "20",
			title: "Acme Slip-On Shoes - 12.5",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "12.5",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
		{
			id: "21",
			title: "Acme Slip-On Shoes - 13",
			availableForSale: true,
			selectedOptions: [{
				name: "Size",
				value: "13",
			}],
			price: {
				amount: "45.00",
				currencyCode: "USD",
			}
		},
	],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-1.png?v=1690004109&w=1200&q=75",
		altText: "Acme Slip-On Shoes",
		width: 1024,
		height: 1024,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-1.png?v=1690004109&w=1200&q=75",
		altText: "Acme Slip-On Shoes",
		width: 1024,
		height: 1024,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-2.png?v=1690004109&w=1200&q=75",
		altText: "Acme Slip-On Shoes",
		width: 1024,
		height: 1024,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-3.png?v=1690004109&w=1200&q=75",
		altText: "Acme Slip-On Shoes",
		width: 1024,
		height: 1024,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-4.png?v=1690004109&w=1200&q=75",
		altText: "Acme Slip-On Shoes",
		width: 1024,
		height: 1024,
	}],
	seo: {
		title: "Acme Slip-On Shoes",
		description: "Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.",
	},
	tags: ["shoes", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "17",
	handle: "acme-mechanical-keyboard",
	availableForSale: false,
	title: "Acme Keyboard",
	description: "",
	descriptionHtml: "",
	options: [],
	priceRange: {
		maxVariantPrice: {
			amount: "150.00",
			currencyCode: "USD",
		},
		minVariantPrice: {
			amount: "150.00",
			currencyCode: "USD",
		},
	},
	variants: [],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/keyboard.png?v=1690003507&w=1200&q=75",
		altText: "Acme Keyboard",
		width: 1200,
		height: 675,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/keyboard.png?v=1690003507&w=1200&q=75",
		altText: "Acme Keyboard",
		width: 1200,
		height: 675,
	}],
	seo: {
		title: "Acme Keyboard",
		description: "",
	},
	tags: ["keyboard", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}, {
	id: "18",
	handle: "acme-dog-sweater",
	availableForSale: true,
	title: "Acme Dog Sweater",
	description: "Keep your dog warm all winter long - When the cold weather hits, make sure your dog isn’t shivering and stays warm with the soft and stretchy fleece dog sweater. Made with 90% polyester & 5% polyurethane to keep moisture out, freezing rain or snow, and to help keep warm air in, so your dog always stays warm. Our dog clothing is safe, durable, and made to last.",
	descriptionHtml: "<p>Keep your dog warm all winter long - When the cold weather hits, make sure your dog isn’t shivering and stays warm with the soft and stretchy fleece dog sweater. Made with 90% polyester & 5% polyurethane to keep moisture out, freezing rain or snow, and to help keep warm air in, so your dog always stays warm. Our dog clothing is safe, durable, and made to last.</p>",
	options: [{
		id: "size",
		name: "Size",
		values: ["0 - 5 lbs", "5 - 20 lbs", "20 - 50 lbs", "50 - 75 lbs", "75+ lbs"],
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
	variants: [{
		id: "1",
		title: "Acme Dog Sweater - 0 - 5 lbs",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "0 - 5 lbs",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}, {
		id: "2",
		title: "Acme Dog Sweater - 5 - 20 lbs",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "5 - 20 lbs",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}, {
		id: "3",
		title: "Acme Dog Sweater - 20 - 50 lbs",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "20 - 50 lbs",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}, {
		id: "4",
		title: "Acme Dog Sweater - 50 - 75 lbs",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "50 - 75 lbs",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}, {
		id: "5",
		title: "Acme Dog Sweater - 75+ lbs",
		availableForSale: true,
		selectedOptions: [{
			name: "Size",
			value: "75+ lbs",
		}],
		price: {
			amount: "20.00",
			currencyCode: "USD",
		}
	}],
	featuredImage: {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/dog-sweater-1.png?v=1690003132&w=1200&q=75",
		altText: "Acme Dog Sweater",
		width: 1200,
		height: 1200,
	},
	images: [{
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/dog-sweater-1.png?v=1690003132&w=1200&q=75",
		altText: "Acme Dog Sweater",
		width: 1200,
		height: 1200,
	}, {
		url: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/dog-sweater-2.png?v=1690003132&w=1200&q=75",
		altText: "Acme Dog Sweater",
		width: 1200,
		height: 1200,
	}],
	seo: {
		title: "Acme Dog Sweater",
		description: "Keep your dog warm all winter long - When the cold weather hits, make sure your dog isn’t shivering and stays warm with the soft and stretchy fleece dog sweater.",
	},
	tags: ["dog", "acme"],
	updatedAt: "2021-01-01T00:00:00Z",
}] satisfies Product[];

export const products = gridProducts.concat(carouselProducts).concat(otherProducts);
