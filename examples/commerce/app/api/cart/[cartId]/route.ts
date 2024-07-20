import { carts } from "db/carts";

type Params = {
  cartId: string;
};

export async function GET(_: Request, context: { params: Params }) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return carts.get(context.params.cartId);
}
