import { carts } from "db/carts";
import { Cart } from "lib/shopify/types";

const generateId = () => Math.random().toString(36).substr(2, 9);

export async function POST(request: Request) {
  const cart = {
    id: generateId(),
    checkoutUrl: "http://localhost:3000/api/checkout",
    lines: [],
    cost: {
      subtotalAmount: {
        amount: "0.00",
        currencyCode: "USD",
      },
      totalAmount: {
        amount: "0.00",
        currencyCode: "USD",
      },
      totalTaxAmount: {
        amount: "0.00",
        currencyCode: "USD",
      },
    },
    totalQuantity: 0,
  };

  carts.set(request.headers.get("cartId") || "", cart);
  return cart;
}
