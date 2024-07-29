import { styled } from "next-yak";

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  padding: 20px;
  background-color: #f0f0f0;
`;
