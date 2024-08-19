import { css } from 'next-yak';
import { Icon } from './icon';

const buttonTextMixin = css<{ $disabled: boolean }>`
  color: black;
  ${({ $disabled }) => $disabled && css`opacity: 0.5;`}
`;

export const buttonMixin = css<{ $hasIcon: boolean; $disabled: boolean }>`
  ${buttonTextMixin};
  ${({ $hasIcon }) => $hasIcon && css`
    ${Icon} {
      ${buttonTextMixin};
    }
  `}
`;