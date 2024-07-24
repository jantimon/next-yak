import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import { keyframes, styled } from 'next-yak';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <AnimatedGridItem key={product.handle}>
          <ProductLink href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </ProductLink>
        </AnimatedGridItem>
      ))}
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedGridItem = styled(Grid.Item)`
  animation: ${fadeIn} 0.5s ease-out;
`;

const ProductLink = styled(Link)`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
`;