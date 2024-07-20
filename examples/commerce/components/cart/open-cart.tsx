import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { styled } from "next-yak";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <IconWrapper>
      <CartIcon className={className} />

      {quantity ? <Quantity>{quantity}</Quantity> : null}
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: rgb(229 229 229);
  color: #000000;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
    color: #ffffff;
  }
`;

const CartIcon = styled(ShoppingCartIcon)`
  height: 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    transform: scaleX(1.1) scaleY(1.1);
  }
`;

const Quantity = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  margin-right: -0.5rem;
  margin-top: -0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  background-color: rgb(37 99 235);
  font-size: 11px;
  font-weight: 500;
  color: rgb(255 255 255);
`;
