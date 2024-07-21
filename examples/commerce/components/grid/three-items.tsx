import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import { css, styled } from 'next-yak';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <Item $size={size}>
      <ProductLink href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </ProductLink>
    </Item>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section css={css`
			margin-left: auto;
  		margin-right: auto;
			display: grid;
			max-width: 1536px;
			gap: 1rem;
			padding-left: 1rem;
  		padding-right: 1rem;
			padding-bottom: 1rem;

			@media (min-width: 768px) {
				grid-template-columns: repeat(6, minmax(0, 1fr));
				grid-template-rows: repeat(2, minmax(0, 1fr));
			}
		`}>
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}

const Item = styled.div<{$size: "full" | "half"}>`
	@media (min-width: 768px) {
		grid-column: ${({$size}) => $size === "full" ? "span 4 / span 4" : "span 2 / span 2"};
		grid-row: ${({$size}) => $size === "full" ? "span 2 / span 2" : "span 1 / span 1"};
	}	
`;

const ProductLink = styled(Link)`
	position: relative;
	display: block;
	aspect-ratio: 1 / 1;
	height: 100%;
	width: 100%;
`;