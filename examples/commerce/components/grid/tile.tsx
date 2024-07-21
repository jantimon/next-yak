import Image from 'next/image';
import Label from '../label';
import { css, styled } from 'next-yak';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <ImageWrapper $hasLabel={Boolean(label)} $active={active}>
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <StyledImage
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<{$hasLabel?: boolean, $active?: boolean}>`
	display: flex;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: 0.5rem;
	border-width: 1px;

	&:hover {
		border-color: rgb(37 99 235);
	}

	@media (prefers-color-scheme: dark) {
		background-color: rgb(0 0 0);
	}

	${({$hasLabel}) => $hasLabel && css`
		position: relative;
	`}

	${({$active}) => $active ? css`
		border-width: 2px;
		border-color: rgb(37 99 235);
	` : css`
		border-color: rgb(229 229 229);

		@media (prefers-color-scheme: dark) {
			border-color: rgb(38 38 38);
		}
	`}
`;

const StyledImage = styled(Image)<{$isInteractive?: boolean}>`
	position: relative;
	height: 100%;
	width: 100%;
	object-fit: contain;

	${({$isInteractive}) => $isInteractive && css<any>`
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		${ImageWrapper}:hover & {
			transform: scale(1.05);
		}
	`}
`;