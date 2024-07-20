"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Price from "components/price";
import { DEFAULT_OPTION } from "lib/constants";
import type { Cart } from "lib/shopify/types";
import { createUrl } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import CloseCart from "./close-cart";
import { DeleteItemButton } from "./delete-item-button";
import { EditItemQuantityButton } from "./edit-item-quantity-button";
import OpenCart from "./open-cart";
import { css, styled } from "next-yak";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <StyledDialog onClose={closeCart}>
          <Transition.Child
            as={Fragment}
            // @ts-ignore
            enter={animationStyle().className}
            // @ts-ignore
            enterFrom={invisibleStyle().className}
            // @ts-ignore
            enterTo={visibleStyle().className}
            // @ts-ignore
            leave={animationStyle().className}
            // @ts-ignore
            leaveFrom={visibleStyle().className}
            // @ts-ignore
            leaveTo={invisibleStyle().className}
          >
            <Backdrop aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            // @ts-ignore
            enter={animationStyle().className}
            // @ts-ignore
            enterFrom={translateXFullStyle().className}
            // @ts-ignore
            enterTo={translateXZeroStyle().className}
            // @ts-ignore
            leave={animationStyle().className}
            // @ts-ignore
            leaveFrom={translateXZeroStyle().className}
            // @ts-ignore
            leaveTo={translateXFullStyle().className}
          >
            <Panel>
              <CloseWrapper>
                <CartText>My Cart</CartText>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </CloseWrapper>

              {!cart || cart.lines.length === 0 ? (
                <EmptyCartWrapper>
                  <CartIcon />
                  <EmptyCartText>Your cart is empty.</EmptyCartText>
                </EmptyCartWrapper>
              ) : (
                <CartContentWrapper>
                  <LineList>
                    {cart.lines.map((item, i) => {
                      const merchandiseSearchParams =
                        {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(
                        ({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        },
                      );

                      const merchandiseUrl = createUrl(
                        `/product/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams),
                      );

                      return (
                        <LineItem key={i}>
                          <LineItemWrapper>
                            <DeleteItemButtonWrapper>
                              <DeleteItemButton item={item} />
                            </DeleteItemButtonWrapper>
                            <LineItemLink
                              href={merchandiseUrl}
                              onClick={closeCart}
                            >
                              <ImageWrapper>
                                <StyledImage
                                  width={64}
                                  height={64}
                                  alt={
                                    item.merchandise.product.featuredImage
                                      .altText || item.merchandise.product.title
                                  }
                                  src={
                                    item.merchandise.product.featuredImage.url
                                  }
                                />
                              </ImageWrapper>

                              <ProductInformation>
                                <ProductTitle>
                                  {item.merchandise.product.title}
                                </ProductTitle>
                                {item.merchandise.title !== DEFAULT_OPTION ? (
                                  <MerchandiseTitle>
                                    {item.merchandise.title}
                                  </MerchandiseTitle>
                                ) : null}
                              </ProductInformation>
                            </LineItemLink>
                            <ItemWrapper>
                              <ItemPrice
                                amount={item.cost.totalAmount.amount}
                                currencyCode={
                                  item.cost.totalAmount.currencyCode
                                }
                              />
                              <EditWrapper>
                                <EditItemQuantityButton
                                  item={item}
                                  type="minus"
                                />
                                <QuantityWrapper>
                                  <Quantity>{item.quantity}</Quantity>
                                </QuantityWrapper>
                                <EditItemQuantityButton
                                  item={item}
                                  type="plus"
                                />
                              </EditWrapper>
                            </ItemWrapper>
                          </LineItemWrapper>
                        </LineItem>
                      );
                    })}
                  </LineList>
                  <PriceLineWrapper>
                    <PriceLineElement $first>
                      <p>Taxes</p>
                      <StyledPrice
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </PriceLineElement>
                    <PriceLineElement>
                      <p>Shipping</p>
                      <TextRight>Calculated at checkout</TextRight>
                    </PriceLineElement>
                    <PriceLineElement>
                      <p>Total</p>
                      <StyledPrice
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </PriceLineElement>
                  </PriceLineWrapper>
                  <ProceedLink href={cart.checkoutUrl}>
                    Proceed to Checkout
                  </ProceedLink>
                </CartContentWrapper>
              )}
            </Panel>
          </Transition.Child>
        </StyledDialog>
      </Transition>
    </>
  );
}

const animationStyle = css`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
`;
const invisibleStyle = css`
  opacity: 0;
  -webkit-backdrop-filter: blur(0);
  backdrop-filter: blur(0);
`;
const visibleStyle = css`
  opacity: 1;
  -webkit-backdrop-filter: blur(0.5px);
  backdrop-filter: blur(0.5px);
`;
const translateXFullStyle = css`
  transform: translateX(100%);
`;
const translateXZeroStyle = css`
  transform: translateX(0px);
`;

const Panel = styled(Dialog.Panel)`
  position: fixed;
  bottom: 0px;
  right: 0px;
  top: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  border-left-width: 1px;
  border-color: rgb(229 229 229);
  background-color: rgb(0 0 0 / 0.8);
  padding: 1.5rem;
  color: rgb(0 0 0);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);

  @media (min-width: 768px) {
    width: 390px;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
    background-color: rgb(0 0 0 / 0.8);
    color: rgb(255 255 255);
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

const EmptyCartWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CartIcon = styled(ShoppingCartIcon)`
  height: 4rem;
`;

const EmptyCartText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

const CartContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.25rem;
`;

const LineList = styled.ul`
  flex-grow: 1;
  overflow: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const LineItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom-width: 1px;
  border-color: rgb(212 212 212);

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
  }
`;

const LineItemWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const DeleteItemButtonWrapper = styled.div`
  position: absolute;
  z-index: 40;
  margin-top: -0.5rem;
  margin-left: 55px;
`;

const LineItemLink = styled(Link)`
  z-index: 30;
  display: flex;
  flex-direction: row;
  & > :not([hidden]) ~ :not([hidden]) {
    margin-right: 0;
    margin-left: 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: rgb(212 212 212);
  background-color: rgb(212 212 212);

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
    background-color: rgb(23 23 23);

    &:hover {
      border-color: rgb(38 38 38);
    }
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProductInformation = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const ProductTitle = styled.span`
  line-height: 1.25;
`;

const MerchandiseTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(115 115 115);

  @media (prefers-color-scheme: dark) {
    color: rgb(163 163 163);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  height: 4rem;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemPrice = styled(Price)`
  display: flex;
  justify-content: flex-end;

  & > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.5rem;
  }

  text-align: right;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const EditWrapper = styled.div`
  margin-left: auto;
  display: flex;
  height: 2.25rem;
  flex-direction: row;
  align-items: center;
  border-radius: 9999px;
  border-width: 1px;
  border-color: rgb(229 229 229);

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
  }
`;

const QuantityWrapper = styled.p`
  width: 1.5rem;
  text-align: center;
`;

const Quantity = styled.span`
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const PriceLineWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(115 115 115);

  @media (prefers-color-scheme: dark) {
    color: rgb(163 163 163);
  }
`;

const PriceLineElement = styled.div<{ $first?: boolean }>`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: rgb(229 229 229);
  padding-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
  }

  ${({ $first }) =>
    !$first &&
    css`
      margin-top: 0.75rem;
    `}
`;

const StyledPrice = styled(Price)`
  text-align: right;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(0 0 0);

  @media (prefers-color-scheme: dark) {
    color: rgb(255 255 255);
  }
`;

const TextRight = styled.p`
  text-align: right;
`;

const ProceedLink = styled.a`
  display: block;
  width: 100%;
  border-radius: 9999px;
  background-color: rgb(37 99 235);
  padding: 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(255 255 255);
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

const StyledDialog = styled(Dialog)`
  position: relative;
  z-index: 50;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 0.3);
`;
