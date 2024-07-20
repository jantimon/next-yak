import Cart from "components/cart";
import OpenCart from "components/cart/open-cart";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";
import { styled } from "next-yak";
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <Navigation>
      <MobileMenuWrapper>
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </MobileMenuWrapper>
      <NavBar>
        <LinkList>
          <HomeLink href="/">
            <LogoSquare />
            <NameWrapper>{SITE_NAME}</NameWrapper>
          </HomeLink>
          {menu.length ? (
            <List>
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <StyledLink href={item.path}>{item.title}</StyledLink>
                </li>
              ))}
            </List>
          ) : null}
        </LinkList>
        <SearchWrapper>
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </SearchWrapper>
        <CartWrapper>
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </CartWrapper>
      </NavBar>
    </Navigation>
  );
}

const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 1024px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
const MobileMenuWrapper = styled.div`
  display: block;
  flex: none;

  @media (min-width: 768px) {
    display: none;
  }
`;
const NavBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const LinkList = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    width: 33.333333%;
  }
`;
const HomeLink = styled(Link)`
  margin-right: 0.5rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: auto;
  }

  @media (min-width: 1024px) {
    margin-right: 1.5rem;
  }
`;
const NameWrapper = styled.div`
  margin-left: 0.5rem;
  flex: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;
const List = styled.ul`
  display: none;
  gap: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const StyledLink = styled(Link)`
  color: rgb(115 115 115);
  text-underline-offset: 4px;

  &:hover {
    color: #000000;
    text-decoration-line: underline;
  }

  @media (prefers-color-scheme: dark) {
    color: rgb(163 163 163);

    &:hover {
      color: rgb(212 212 212);
    }
  }
`;
const SearchWrapper = styled.div`
  display: none;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 33.333333%;
  }
`;
const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 33.333333%;
  }
`;
