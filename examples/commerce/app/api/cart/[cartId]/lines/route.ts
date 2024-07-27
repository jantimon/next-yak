import { carts } from "db/carts";
import { products } from "db/products";
import { Cart, CartItem, Product } from "lib/shopify/types";

type Params = {
  cartId: string;
};

export async function POST(request: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const cart = carts.get(context.params.cartId);

  if (!cart) {
    return new Response(JSON.stringify({ error: "Cart not found" }), { status: 404 });
  }

  const { lines } = (await request.json()) as {
    lines: { merchandiseId: string; quantity: number }[];
  };

  for (const line of lines) {
    const product = products.find(p => p.variants.some(v => v.id === line.merchandiseId));
    const variant = product?.variants.find(v => v.id === line.merchandiseId);

    if (!product || !variant) {
      return new Response(JSON.stringify({ error: "Product or variant not found" }), { status: 404 });
    }

    const newItem: CartItem = {
      id: Math.random().toString(36).substr(2, 9),
      quantity: line.quantity,
      cost: {
        totalAmount: {
          amount: (parseFloat(variant.price.amount) * line.quantity).toFixed(2),
          currencyCode: variant.price.currencyCode,
        },
      },
      merchandise: {
        id: variant.id,
        title: variant.title,
        selectedOptions: variant.selectedOptions,
        product: product,
      },
    };

    cart.lines.push(newItem);
  }

  // updateCartTotals(cart);

  return Response.json(cart);
}

function updateCartTotals(cart: Cart) {
  let subtotal = 0;
  let totalQuantity = 0;

  for (const line of cart.lines) {
    subtotal += parseFloat(line.cost.totalAmount.amount);
    totalQuantity += line.quantity;
  }

  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  cart.cost = {
    subtotalAmount: {
      amount: subtotal.toFixed(2),
      currencyCode: "USD",
    },
    totalAmount: {
      amount: total.toFixed(2),
      currencyCode: "USD",
    },
    totalTaxAmount: {
      amount: tax.toFixed(2),
      currencyCode: "USD",
    },
  };
  cart.totalQuantity = totalQuantity;
}

export async function DELETE(request: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const cart = carts.get(context.params.cartId);

  if (!cart) {
    return new Response(JSON.stringify({ error: "Cart not found" }), { status: 404 });
  }

  const { lineIds } = (await request.json()) as { lineIds: string[] };

  cart.lines = cart.lines.filter((line) => !lineIds.includes(line.id));

  return Response.json(carts.get(context.params.cartId));
}

export async function PUT(request: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const cart = carts.get(context.params.cartId);

  if (!cart) {
    return new Response(JSON.stringify({ error: "Cart not found" }), { status: 404 });
  }

  const { lines } = (await request.json()) as {
    lines: { id: string; merchandiseId: string; quantity: number }[];
  };

  cart.lines = cart.lines.map((line) => {
    const updatedLine = lines.find((l) => l.id === line.id);

    if (updatedLine) {
      line.merchandise.id = updatedLine.merchandiseId;
      line.quantity = updatedLine.quantity;
    }

    return line;
  });

  return Response.json(carts.get(context.params.cartId));
}
