import { styled } from "next-yak";
import Image from "next/image";
import yakPlayground from "@/public/img/yak-playground.jpg";

export const PlaygroundPage = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <StyledImage
          src={yakPlayground}
          alt="Sad yak in a playground"
          fill
          sizes="(max-width: 768px) 80vw, 400px"
          priority
        />
      </ImageWrapper>
      <Callout>Sorry</Callout>
      <p>
        We're currently working on getting the playground to work, but we're
        having some issues with running SWC in a serverless function.
      </p>
      <p>
        If you have some ideas or insights on how to get this to work, please
        let us know!
      </p>
      <Link
        href="
				https://www.github.com/jantimon/next-yak/issues"
      >
        On Github
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 2rem;
  max-width: 75ch;
  margin: 4rem auto;

  & > p + p {
    margin-top: 1rem;
  }
`;

const Callout = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
`;

const Link = styled.a`
  display: block;
  margin: 1rem auto;
  text-align: center;
  text-decoration: underline;
`;

const StyledImage = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 400px;
  margin: 0 auto 2rem;
  aspect-ratio: 1;
`;
