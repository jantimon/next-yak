'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { ListItem } from '.';
import { FilterItem } from './item';
import { styled } from 'next-yak';

export default function FilterItemDropdown({ list }: { list: ListItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <DropdownContainer ref={ref}>
      <DropdownHeader onClick={() => setOpenSelect(!openSelect)}>
        <div>{active}</div>
        <StyledChevronDownIcon />
      </DropdownHeader>
      {openSelect && (
        <DropdownContent onClick={() => setOpenSelect(false)}>
          {list.map((item: ListItem, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  display: flex;
  width: 100%;
  items-center: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 40;
  width: 100%;
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (prefers-color-scheme: dark) {
    background-color: rgb(0, 0, 0);
  }
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  height: 1rem;
`;