import { styled } from "next-yak";

const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(parseFloat(amount))}`}
    <CurrencyCode
      className={currencyCodeClassName}
    >{`${currencyCode}`}</CurrencyCode>
  </p>
);

const CurrencyCode = styled.span`
  margin-left: 0.25rem;
  display: inline;
`;

export default Price;
