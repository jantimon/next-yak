import { css } from 'next-yak';
import { buttonMixin } from '../mixin';

export const primaryButtonMixin = css`
    ${buttonMixin};
    color: green;
`;