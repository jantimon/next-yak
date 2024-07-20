import { withYak } from "next-yak/withYak";

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["geist"],
};

export default withYak(nextConfig);
