export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Response.json([
    {
      title: "All",
      path: "/search",
    },
    {
      title: "Shirts",
      path: "/search/shirts",
    },
    {
      title: "Stickers",
      path: "/search/stickers",
    },
  ]);
}
