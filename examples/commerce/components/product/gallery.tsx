'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from 'components/grid/tile';
import { createUrl } from 'lib/utils';
import { styled } from 'next-yak';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  const previousUrl = createUrl(pathname, previousSearchParams);

  return (
    <>
      <ImageContainer>
        {images[imageIndex] && (
          <StyledImage
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}
        {images.length > 1 ? (
          <NavigationContainer>
            <NavigationButtons>
              <NavigationButton
                aria-label="Previous product image"
                href={previousUrl}
                scroll={false}
              >
                <ArrowLeftIcon style={{ height: '1.25rem' }} />
              </NavigationButton>
              <Divider />
              <NavigationButton
                aria-label="Next product image"
                href={nextUrl}
                scroll={false}
              >
                <ArrowRightIcon style={{ height: '1.25rem' }} />
              </NavigationButton>
            </NavigationButtons>
          </NavigationContainer>
        ) : null}
      </ImageContainer>
      {images.length > 1 ? (
        <ThumbnailList>
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());
            imageSearchParams.set('image', index.toString());
            return (
              <ThumbnailItem key={image.src}>
                <ThumbnailLink
                  aria-label="Enlarge product image"
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </ThumbnailLink>
              </ThumbnailItem>
            );
          })}
        </ThumbnailList>
      ) : null}
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  height: 100%;
  max-height: 550px;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const NavigationContainer = styled.div`
  position: absolute;
  bottom: 15%;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const NavigationButtons = styled.div`
	margin-left: auto;
	margin-right: auto;
  display: flex;
  height: 2.75rem;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid white;
	background-color: hsla(0,0%,98%,.8);
  color: rgb(115, 115, 115);
  backdrop-filter: blur(4px);

  @media (prefers-color-scheme: dark) {
    border-color: black;
    background-color: rgba(23, 23, 23, 0.8);
  }
`;

const NavigationButton = styled(Link)`
  height: 100%;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
  transition: all 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    color: black;
  }

	@media (prefers-color-scheme: dark) {
		&:hover {
			color: white;
		}
	}
`;

const Divider = styled.div`
  margin: 0 0.25rem;
  height: 1.5rem;
  width: 1px;
  background-color: rgb(115, 115, 115);
`;

const ThumbnailList = styled.ul`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  items-center;
  justify-content: center;
  gap: 0.5rem;
  overflow: auto;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const ThumbnailItem = styled.li`
  height: 5rem;
  width: 5rem;
`;

const ThumbnailLink = styled(Link)`
  height: 100%;
  width: 100%;
`;