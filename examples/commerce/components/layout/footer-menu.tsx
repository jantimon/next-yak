'use client';

import { Menu } from 'lib/shopify/types';
import { css, styled } from 'next-yak';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <MenuItemLink href={item.path} $active={active}>
        {item.title}
      </MenuItemLink>
    </li>
  );
};

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul>
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}

const MenuItemLink = styled(Link)<{$active: boolean}>`
  display: block;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-underline-offset: 4px;
  
  &:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      color: rgb(212, 212, 212);
    }
  }

  ${props => props.$active && 
    // todo: create runtime error if this is just a string
    css`
    color: rgb(0, 0, 0);
    
    @media (prefers-color-scheme: dark) {
      color: rgb(212, 212, 212);
    }
  `}
`;