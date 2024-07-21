import { withYak } from "next-yak/withYak";

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["geist"],
	images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
};

export default withYak(nextConfig);
