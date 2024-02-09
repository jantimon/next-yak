/**
 * Takes a function and a css unit and returns the result of the function concatenated with the unit
 *
 * @usage
 *
 * ```tsx
 * import { styled, atoms } from "next-yak";
 *
 * const Button = styled.button<{ $primary?: boolean }>`
 *  ${atoms("text-teal-600", "text-base", "rounded-md")}
 *  ${props => props.$primary && atoms("shadow-md")}
 * `;
 * ```
 */
export const unitPostFix =
  (fn: any, unit: string) =>
  (...args: any[]) =>
    fn(...args) + unit;
