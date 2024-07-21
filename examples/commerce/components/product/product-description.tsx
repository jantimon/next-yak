import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';
import { styled } from 'next-yak';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <ProductHeader>
        <ProductTitle>{product.title}</ProductTitle>
        <PriceTag>
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </PriceTag>
      </ProductHeader>
      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>
      {product.descriptionHtml ? (
        <ProductDescriptionStyled
          html={product.descriptionHtml}
        />
      ) : null}
      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>
    </>
  );
}

const ProductHeader = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    border-color: #404040;
  }
`;

const ProductTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
`;

const PriceTag = styled.div`
  margin-right: auto;
  width: auto;
  border-radius: 9999px;
  background-color: #2563eb;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
`;

const ProductDescriptionStyled = styled(Prose)`
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.6);
  }
`;