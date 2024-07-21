'use client';

import { ProductOption, ProductVariant } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import { css, styled } from 'next-yak';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  variants
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));

  return options.map((option) => (
    <OptionList key={option.id}>
      <OptionTitle>{option.name}</OptionTitle>
      <OptionValues>
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(searchParams.toString());

          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
            options.find(
              (option) => option.name.toLowerCase() === key && option.values.includes(value)
            )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) => combination[key] === value && combination.availableForSale
            )
          );

          // The option is active if it's in the url params.
          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <OptionButton
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                router.replace(optionUrl, { scroll: false });
              }}
              title={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
							$isActive={isActive}
							$isAvailableForSale={!!isAvailableForSale}
            >
              {value}
            </OptionButton>
          );
        })}
      </OptionValues>
    </OptionList>
  ));
}



const OptionList = styled.dl`
  margin-bottom: 2rem;
`;

const OptionTitle = styled.dt`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;

const OptionValues = styled.dd`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const OptionButton = styled.button<{$isActive: boolean, $isAvailableForSale: boolean}>`
  display: flex;
  min-width: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid;
  background-color: rgb(245, 245, 245);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (prefers-color-scheme: dark) {
    border-color: rgb(38, 38, 38);
    background-color: rgb(23, 23, 23);
  }

  ${props => props.$isActive && css`
    cursor: default;
    box-shadow: 0 0 0 2px rgb(37, 99, 235);
  `}

  ${props => !props.$isActive && props.$isAvailableForSale && css`
    box-shadow: 0 0 0 1px transparent;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 0 1px rgb(37, 99, 235);
    }
  `}

  ${props => !props.$isAvailableForSale && css`
    position: relative;
    z-index: 10;
    cursor: not-allowed;
    overflow: hidden;
    background-color: rgb(245, 245, 245);
    color: rgb(115, 115, 115);
    box-shadow: 0 0 0 1px rgb(212, 212, 212);

    &::before {
      content: '';
      position: absolute;
			left: 0;
			right: 0;
      z-index: -10;
      height: 1px;
      transform: rotate(-45deg);
      background-color: rgb(212, 212, 212);
      transition: transform 300ms ease-in-out;
    }

    @media (prefers-color-scheme: dark) {
      background-color: rgb(23, 23, 23);
      color: rgb(163, 163, 163);
      box-shadow: 0 0 0 1px rgb(64, 64, 64);

      &::before {
        background-color: rgb(64, 64, 64);
      }
    }
  `}
`;