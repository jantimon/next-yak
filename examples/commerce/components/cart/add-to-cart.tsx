'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/shopify/types';
import { css, styled } from 'next-yak';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();

  if (!availableForSale) {
    return (
      <Button disabled aria-disabled>
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label="Please select an option"
        aria-disabled
				disabled
      >
        <IconContainer>
					<PlusIcon className={PlusIconStyles().className} />
        </IconContainer>
        Add To Cart
      </Button>
    );
  }

  return (
    <Button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
			disabled={pending}
    >
      <IconContainer>
        {pending ? <LoadingDots className={LoadingDotsStyles().className} /> : <PlusIcon className={PlusIconStyles().className} />}
      </IconContainer>
      Add To Cart
    </Button>
  );
}

export function AddToCart({
  variants,
  availableForSale
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <SrOnly aria-live="polite" role="status">
        {message}
      </SrOnly>
    </form>
  );
}

const PlusIconStyles = css`
	height: 1.25rem;
`

const LoadingDotsStyles = css`
	margin-bottom: 0.75rem; 
	background: white;
`

const Button = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: rgb(37, 99, 235);
  padding: 1rem;
  letter-spacing: 0.025em;
  color: rgb(255, 255, 255);

  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.6;
    &:hover {
      opacity: 0.6;
    }
  `}

  ${props => !props.disabled && css`
    &:hover {
      opacity: 0.9;
    }
  `}
`;

const IconContainer = styled.div`
  position: absolute;
  left: 0;
  margin-left: 1rem;
`;

const SrOnly = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
