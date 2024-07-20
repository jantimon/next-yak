"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { updateItemQuantity } from "components/cart/actions";
import LoadingDots from "components/loading-dots";
import type { CartItem } from "lib/shopify/types";
import { css, styled } from "next-yak";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({ type }: { type: "plus" | "minus" }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      aria-disabled={pending}
      $pending={pending}
      $type={type}
    >
      {pending ? <Loading /> : type === "plus" ? <Plus /> : <Minus />}
    </Button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: "plus" | "minus";
}) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <ScreenReaderText aria-live="polite" role="status">
        {message}
      </ScreenReaderText>
    </form>
  );
}

const Button = styled.button<{ $pending: boolean; $type: "plus" | "minus" }>`
  display: flex;
  height: 100%;
  min-width: 36px;
  max-width: 36px;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  &:hover {
    border-color: rgb(38 38 38);
    opacity: 0.8;
  }

  ${({ $pending }) =>
    $pending &&
    css`
      cursor: not-allowed;
    `}

  ${({ $type }) =>
    $type === "minus" &&
    css`
      margin-left: auto;
    `}
`;

const Loading = styled(LoadingDots)`
  background-color: #000000;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

const Plus = styled(PlusIcon)`
  width: 1rem;
  height: 1rem;

  @media (prefers-color-scheme: dark) {
    color: rgb(115 115 115);
  }
`;

const Minus = styled(MinusIcon)`
  width: 1rem;
  height: 1rem;

  @media (prefers-color-scheme: dark) {
    color: rgb(115 115 115);
  }
`;

const ScreenReaderText = styled.p`
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
