import { styled } from "next-yak";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  padding: 20px;
  background-color: #f0f0f0;
`;
