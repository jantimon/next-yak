import { Product } from "lib/shopify/types";

export const gridProducts = [{
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
		url: "https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-white.png%3Fv%3D1690003088&w=1080&q=75",
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

export const carouselProducts = [{
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

export const products = gridProducts.concat(carouselProducts);