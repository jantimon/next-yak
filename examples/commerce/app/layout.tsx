/** @jsxImportSource next-yak */
import Navbar from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { ensureStartsWith } from "lib/utils";
import { ReactNode } from "react";
import "./globals.css";
import { css } from "next-yak";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, "@")
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, "https://")
  : undefined;

// export const metadata = {
//   metadataBase: new URL(baseUrl),
//   title: {
//     default: SITE_NAME!,
//     template: `%s | ${SITE_NAME}`
//   },
//   robots: {
//     follow: true,
//     index: true
//   },
//   ...(twitterCreator &&
//     twitterSite && {
//       twitter: {
//         card: 'summary_large_image',
//         creator: twitterCreator,
//         site: twitterSite
//       }
//     })
// };

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        css={css`
          background-color: rgb(250 250 250);
          color: rgb(0 0 0);
          & *::selection {
            background-color: rgb(94 234 212);
          }

          @media (prefers-color-scheme: dark) {
            background-color: rgb(23 23 23);
            color: rgb(255 255 255);
            & *::selection {
              color: rgb(255 255 255);
              background-color: rgb(236 72 153);
            }
          }
        `}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
