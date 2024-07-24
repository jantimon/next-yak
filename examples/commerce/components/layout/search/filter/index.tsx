import { SortFilterItem } from 'lib/constants';
import { Suspense } from 'react';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';
import { styled } from 'next-yak';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <>
      <nav>
      {title && <Title>{title}</Title>}
      <DesktopList>
        <Suspense fallback={null}>
          <FilterItemList list={list} />
        </Suspense>
      </DesktopList>
      <MobileList>
        <Suspense fallback={null}>
          <FilterItemDropdown list={list} />
        </Suspense>
      </MobileList>
    </nav>
    </>
  );
}

const Title = styled.h3`
  display: none;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(115, 115, 115);

  @media (min-width: 768px) {
    display: block;
  }

  @media (prefers-color-scheme: dark) {
    color: rgb(163, 163, 163);
  }
`;

const DesktopList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileList = styled.ul`
  @media (min-width: 768px) {
    display: none;
  }
`;