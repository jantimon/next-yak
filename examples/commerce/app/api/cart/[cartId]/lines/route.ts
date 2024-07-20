import { carts } from "db/carts";
import { Product } from "lib/shopify/types";

type Params = {
  cartId: string;
};

export async function POST(request: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const cart = carts.get(context.params.cartId);

  if (!cart) {
    throw new Error("Cart not found");
  }

  const { lines } = (await request.json()) as {
    lines: { merchandiseId: string; quantity: number }[];
  };

  cart.lines.push(
    ...lines.map((line) => ({
      id: Math.random().toString(36).substr(2, 9),
      quantity: line.quantity,
      cost: {
        totalAmount: {
          amount: "0.00",
          currencyCode: "USD",
        },
      },
      merchandise: {
        id: line.merchandiseId,
        title: "Product",
        selectedOptions: [],
        product: {
          id: "1",
        } as Product,
      },
    })),
  );

  return carts.get(context.params.cartId);
}

export async function DELETE(request: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const cart = carts.get(context.params.cartId);

  if (!cart) {
    throw new Error("Cart not found");
  }

  const { lineIds } = (await request.json()) as { lineIds: string[] };

  cart.lines = cart.lines.filter((line) => !lineIds.includes(line.id));

  return carts.get(context.params.cartId);
}

export async function PUT(request: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const cart = carts.get(context.params.cartId);

  if (!cart) {
    throw new Error("Cart not found");
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

  return carts.get(context.params.cartId);
}
