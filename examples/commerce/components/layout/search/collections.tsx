import { Suspense } from 'react';

import { getCollections } from 'lib/shopify';
import FilterList from './filter';
import { styled } from 'next-yak';

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

export default function Collections() {
  return (
    <Suspense
      fallback={
        <SkeletonContainer>
          <ActiveAndTitles/>
          <ActiveAndTitles/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
        </SkeletonContainer>
      }
    >
      <CollectionList />
    </Suspense>
  );
}

const SkeletonContainer = styled.div`
  grid-column: span 2;
  display: none;
  height: 400px;
  width: 100%;
  flex: none;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const SkeletonItem = styled.div`
  margin-bottom: 0.75rem;
  height: 1rem;
  width: 83.333333%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: 0.25rem;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
`;

const ActiveAndTitles = styled(SkeletonItem)`
  background-color: rgb(38, 38, 38);

  @media (prefers-color-scheme: dark) {
    background-color: rgb(212, 212, 212);
  }
`;

const Items = styled(SkeletonItem)`
  background-color: rgb(163, 163, 163);

  @media (prefers-color-scheme: dark) {
    background-color: rgb(64, 64, 64);
  }
`;