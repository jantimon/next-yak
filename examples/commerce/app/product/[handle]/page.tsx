// import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
// import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import { styled } from 'next-yak';

// export async function generateMetadata({
//   params
// }: {
//   params: { handle: string };
// }): Promise<Metadata> {
//   const product = await getProduct(params.handle);

//   if (!product) return notFound();

//   const { url, width, height, altText: alt } = product.featuredImage || {};
//   const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//   return {
//     title: product.seo.title || product.title,
//     description: product.seo.description || product.description,
//     robots: {
//       index: indexable,
//       follow: indexable,
//       googleBot: {
//         index: indexable,
//         follow: indexable
//       }
//     },
//     openGraph: url
//       ? {
//           images: [
//             {
//               url,
//               width,
//               height,
//               alt
//             }
//           ]
//         }
//       : null
//   };
// }

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
			<ProductContainer>
        <ProductWrapper>
          <ProductImageContainer>
            <Suspense
              fallback={
                <div style={{ position: 'relative', aspectRatio: '1 / 1', height: '100%', maxHeight: '550px', width: '100%', overflow: 'hidden' }} />
              }
            >
              <Gallery
                images={product.images.map((image: Image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
          </ProductImageContainer>

          <ProductDetailsContainer>
            <ProductDescription product={product} />
          </ProductDetailsContainer>
        </ProductWrapper>
        <RelatedProducts id={product.id} />
      </ProductContainer>
      <Footer />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <RelatedProductsContainer>
      <RelatedProductsTitle>Related Products</RelatedProductsTitle>
      <RelatedProductsList>
        {relatedProducts.map((product) => (
          <RelatedProductItem key={product.handle}>
            <RelatedProductLink href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </RelatedProductLink>
          </RelatedProductItem>
        ))}
      </RelatedProductsList>
    </RelatedProductsContainer>
  );
}

const ProductContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1536px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(38, 38, 38);
    background-color: rgb(0, 0, 0);
  }
`;

const ProductImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-basis: 100%;

  @media (min-width: 1024px) {
    flex-basis: 66.666667%;
  }
`;

const ProductDetailsContainer = styled.div`
  flex-basis: 100%;

  @media (min-width: 1024px) {
    flex-basis: 33.333333%;
  }
`;

const RelatedProductsContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const RelatedProductsTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

const RelatedProductsList = styled.ul`
  display: flex;
  width: 100%;
  gap: 1rem;
  overflow-x: auto;
  padding-top: 0.25rem;
`;

const RelatedProductItem = styled.li`
  aspect-ratio: 1 / 1;
  width: 100%;
  flex: none;

  @media (min-width: 475px) {
    width: 50%;
  }

  @media (min-width: 640px) {
    width: 33.333333%;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const RelatedProductLink = styled(Link)`
  position: relative;
  height: 100%;
  width: 100%;
`;