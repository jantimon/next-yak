import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';
import { keyframes, styled } from 'next-yak';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || 'ACME, Inc.';

  return (
    <FooterElem>
      <FooterContent>
        <div>
          <LogoLink href="/">
            <LogoSquare size="sm" />
            <Uppercase>ACME STORE</Uppercase>
          </LogoLink>
        </div>
        <Suspense
          fallback={
            <SkeletonContainer>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </SkeletonContainer>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <Deploy>
          <DeployButton
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <DeployButtonSpan>▲</DeployButtonSpan>
            <DeployButtonDivider />
            <DeployButtonSpan>Deploy</DeployButtonSpan>
          </DeployButton>
        </Deploy>
      </FooterContent>
      <FooterBottom>
        <FooterBottomContent>
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <Divider />
          <p>Designed in California</p>
          <p style={{ marginLeft: 'auto' }}>
            <VercelLink href="https://vercel.com">
              Crafted by ▲ Vercel
            </VercelLink>
          </p>
        </FooterBottomContent>
      </FooterBottom>
    </FooterElem>
  );
}

const Deploy = styled.div`
  @media (min-width: 768px) {
    margin-left: auto;
  }
`

const Uppercase = styled.span`
  text-transform: uppercase;
`;

const FooterElem = styled.footer`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(115, 115, 115);

  @media (prefers-color-scheme: dark) {
    color: rgb(163, 163, 163);
  }
`;

const FooterContent = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 80rem;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid rgb(229, 229, 229);
  padding: 3rem 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 1320px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64, 64, 64);
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgb(0, 0, 0);

  @media (min-width: 768px) {
    padding-top: 0.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: rgb(255, 255, 255);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 1.5rem;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: 0.25rem;
  background-color: rgb(229, 229, 229);

  @media (prefers-color-scheme: dark) {
    background-color: rgb(64, 64, 64);
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  height: 188px;
  width: 200px;
  flex-direction: column;
  gap: 0.5rem;
`;

const DeployButton = styled.a`
  display: flex;
  height: 2rem;
  width: max-content;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(0, 0, 0);

  @media (min-width: 768px) {
    margin-left: auto;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64, 64, 64);
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
`;

const DeployButtonSpan = styled.span`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const DeployButtonDivider = styled.hr`
  height: 100%;
  border-right: 1px solid rgb(229, 229, 229);

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64, 64, 64);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgb(229, 229, 229);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64, 64, 64);
  }
`;

const FooterBottomContent = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 80rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1320px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Divider = styled.hr`
  display: none;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 1rem;
  width: 1px;
  border-left: 1px solid rgb(163, 163, 163);

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const VercelLink = styled.a`
  color: rgb(0, 0, 0);

  @media (prefers-color-scheme: dark) {
    color: rgb(255, 255, 255);
  }
`;