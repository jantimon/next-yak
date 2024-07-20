"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { removeItem } from "components/cart/actions";
import LoadingDots from "components/loading-dots";
import type { CartItem } from "lib/shopify/types";
import { css, styled } from "next-yak";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Remove cart item"
      aria-disabled={pending}
      $pending={pending}
    >
      {pending ? <Loading /> : <XIcon />}
    </Button>
  );
}

export function DeleteItemButton({ item }: { item: CartItem }) {
  const [message, formAction] = useFormState(removeItem, null);
  const itemId = item.id;
  const actionWithVariant = formAction.bind(null, itemId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}

const Button = styled.button<{ $pending: boolean }>`
  display: flex;
  height: 17px;
  width: 17px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: rgb(115 115 115);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  ${({ $pending }) =>
    $pending &&
    css`
      padding-left: 0;
      padding-right: 0;
      cursor: not-allowed;
    `}
`;

// todo: wrapping a component with requried className should work when wrapping with styled
const Loading = styled(LoadingDots)`
  background-color: #ffffff;
`;

const XIcon = styled(XMarkIcon)`
  margin-left: 1px;
  margin-right: 1px;
  width: 1rem;
  height: 1rem;
  color: #ffffff;

  @media (prefers-color-scheme: dark) {
    color: #000000;
  }
`;
