import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import { styled } from 'next-yak';

// export const metadata = {
//   title: 'Search',
//   description: 'Search for products in the store.'
// };

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <ResultsText>
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <BoldSpan>&quot;{searchValue}&quot;</BoldSpan>
        </ResultsText>
      ) : null}
      {products.length > 0 ? (
        <StyledGrid>
          <ProductGridItems products={products} />
        </StyledGrid>
      ) : null}
    </>
  );
}

const ResultsText = styled.p`
  margin-bottom: 1rem;
`;

const BoldSpan = styled.span`
  font-weight: 700;
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;