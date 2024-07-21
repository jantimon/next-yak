import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import { keyframes, styled } from 'next-yak';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <CarouselContainer>
      <CarouselList>
        {carouselProducts.map((product, i) => (
          <CarouselItem key={`${product.handle}${i}`}>
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
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </ProductLink>
          </CarouselItem>
        ))}
      </CarouselList>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1.5rem;
  padding-top: 0.25rem;
`;

const carouselAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;


const CarouselList = styled.ul`
  display: flex;
  gap: 1rem;
  animation: ${carouselAnimation} 60s linear infinite;
`;

const CarouselItem = styled.li`
  position: relative;
  aspect-ratio: 1 / 1;
  height: 30vh;
  max-height: 275px;
  width: 66.67%;
  max-width: 475px;
  flex: none;

  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

const ProductLink = styled(Link)`
  position: relative;
  height: 100%;
  width: 100%;
`;