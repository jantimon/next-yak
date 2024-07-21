import Price from './price';
import { css, styled } from 'next-yak';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <LabelWrapper $isCenter={position === 'center'}>
      <PriceWrapper>
        <Title>{title}</Title>
        <StyledPrice
          className="flex-none rounded-full bg-blue-600 p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName={CurrencyCodeStyle().className}
        />
      </PriceWrapper>
    </LabelWrapper>
  );
};

const CurrencyCodeStyle = css`
	display: none;

	@container label (min-width: 275px) {
    display: inline;
  }
`

const StyledPrice = styled(Price)`
	flex: none;
	border-radius: 9999px;
	background-color: rgb(37 99 235);
	padding: 0.5rem;
	color: rgb(255 255 255);
`;

const Title = styled.h3`
	margin-right: 1rem;
	overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
	flex-grow: 1;
	padding-left: 0.5rem;
	line-height: 1;
	letter-spacing: -0.025em;
`;

const LabelWrapper = styled.div<{$isCenter: boolean}>`
	position: absolute;
	bottom: 0px;
	left: 0px;
	display: flex;
	width: 100%;
	padding-left: 1rem;
  padding-right: 1rem;
	padding-bottom: 1rem;

	container-type: inline-size;
  container-name: label;

	@media (min-width: 1024px) {
		padding-left: 5rem;
    padding-right: 5rem;
		padding-bottom: 35%;
	}
`;

const PriceWrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 9999px;
	border-width: 1px;
	background-color: rgb(255 255 255 / 0.7);
	padding: 0.25rem;
	font-size: 0.75rem;
  line-height: 1rem;
	font-weight: 600;
	color: rgb(0 0 0);
	backdrop-filter: blur(12px);

	@media (prefers-color-scheme: dark) {
		border-color: rgb(38 38 38);
		background-color: rgb(0 0 0 / 0.7);
		color: rgb(255 255 255);
	}
`;


export default Label;