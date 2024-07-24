import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { styled } from 'next-yak';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>
        <SideColumn>
          <Collections />
        </SideColumn>
        <MainColumn>{children}</MainColumn>
        <FilterColumn>
          <FilterList list={sorting} title="Sort by" />
        </FilterColumn>
      </Layout>
      <Footer />
    </>
  );
}

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1536px;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  color: rgb(0, 0, 0);

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (prefers-color-scheme: dark) {
    color: rgb(255, 255, 255);
  }
`;

const SideColumn = styled.div`
  order: 1;
  width: 100%;
  flex: none;

  @media (min-width: 768px) {
    max-width: 125px;
  }
`;

const MainColumn = styled.div`
  order: 3;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    order: 2;
  }
`;

const FilterColumn = styled.div`
  order: 2;
  flex: none;

  @media (min-width: 768px) {
    order: 3;
    width: 125px;
  }
`;
