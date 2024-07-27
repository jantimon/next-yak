import { TAGS } from "lib/constants";
import { Cart, Collection, Menu, Product } from "lib/shopify/types";

export async function getMenu(collection: string): Promise<Menu[]> {
  const queryParams = new URLSearchParams({
    collection,
  });

  return (
    await fetch(`http://localhost:3000/api/menu?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: { tags: [TAGS.collections] },
    })
  ).json();
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  return (
    await fetch(`http://localhost:3000/api/cart/${cartId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: { tags: [TAGS.cart] },
    })
  ).json();
}

export async function createCart(): Promise<Cart> {
  return (
    await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })
  ).json();
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  return (
    await fetch(`http://localhost:3000/api/cart/${cartId}/lines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lines }),
      cache: "no-store",
    })
  ).json();
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<Cart> {
  return (
    await fetch(`http://localhost:3000/api/cart/${cartId}/lines`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineIds }),
      cache: "no-store",
    })
  ).json();
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  return (
    await fetch(`http://localhost:3000/api/cart/${cartId}/lines`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lines }),
      cache: "no-store",
    })
  ).json();
}


export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const queryParams = new URLSearchParams({
    collection,
  });
  if (reverse) {
    queryParams.set('reverse', reverse.toString());
  }
  if (sortKey) {
    queryParams.set('sortKey', sortKey);
  }

  return (await fetch(`http://localhost:3000/api/products?${queryParams.toString()}`, {
    method: "GET",
    next: { tags: [TAGS.collections, TAGS.products] },
    cache: "no-store",
  })).json();
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return (await fetch(`http://localhost:3000/api/products/${handle}`, {
    method: "GET",
    next: { tags: [TAGS.products] },
    cache: "no-store",
  })).json();
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  return (await fetch(`http://localhost:3000/api/recommendations/${productId}`, {
    method: "GET",
    next: { tags: [TAGS.products] },
    cache: "no-store",
  })).json();
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const queryParams = new URLSearchParams();
  if (query) {
    queryParams.set('query', query);
  }
  if (reverse) {
    queryParams.set('reverse', reverse.toString());
  }
  if (sortKey) {
    queryParams.set('sortKey', sortKey);
  }

  return (await fetch(`http://localhost:3000/api/products?${queryParams.toString()}`, {
    method: "GET",
    next: { tags: [TAGS.products] },
    cache: "no-store",
  })).json();
}

export async function getCollections(): Promise<Collection[]> {
  return (await fetch(`http://localhost:3000/api/collections`, {
    method: "GET",
    next: { tags: [TAGS.collections] },
    cache: "no-store",
  })).json();
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  return (await fetch(`http://localhost:3000/api/collections/${handle}`, {
    method: "GET",
    next: { tags: [TAGS.collections] },
    cache: "no-store",
  })).json();
}