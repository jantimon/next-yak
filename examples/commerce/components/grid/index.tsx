import { styled } from 'next-yak';
import type {ComponentProps} from 'react';

interface Grid {
	(props: ComponentProps<typeof Grid>): ReturnType<typeof Grid>;
	Item: typeof GridItemContainer;
}

const Grid = styled.ul`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
`;

const GridItemContainer = styled.li`
  aspect-ratio: 1 / 1;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

// @ts-ignore
Grid.Item = GridItemContainer;

export default Grid as any as Grid;