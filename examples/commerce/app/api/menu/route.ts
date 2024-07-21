export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { searchParams } = new URL(request.url);

  if (searchParams.has('collection')) {
    const collection = searchParams.get('collection');
    if (collection === 'next-js-frontend-footer-menu') {
      return Response.json([
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Terms & Conditions",
          path: "/terms-conditions",
        },
        {
          title: "Shipping & Return Policy",
          path: "/shipping-return-policy",
        },
        {
          title: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          title: "FAQ",
          path: "/frquently-asked-questions",
        },
      ]);
    }
  }


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
