'use client';

import type { SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';
import { css, styled } from 'next-yak';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? StyledP : StyledLink;
  newParams.delete('q');

  return (
    <li key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        $active={active}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );
  const DynamicTag = active ? StyledP : StyledLink;

  return (
    <li key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        $active={active}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return 'path' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}

const ListItemStyle = css<{ $active?: boolean }>`
  margin-top: 0.5rem;
  display: flex;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(0, 0, 0);
  text-underline-offset: 4px;

  &:hover {
    text-decoration: underline;
  }

  @media (prefers-color-scheme: dark) {
    color: rgb(255, 255, 255);

    &:hover {
      color: rgb(245, 245, 245);
    }
  }

  ${props => props.$active && css`
    text-decoration: underline;
    text-underline-offset: 4px;
  `}
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  ${ListItemStyle}
`;

const StyledP = styled.p<{ $active?: boolean }>`
  ${ListItemStyle}
`;