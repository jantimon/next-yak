import { withYakSwc } from 'next-yak/withYak';

/** @type {import('next').NextConfig} */
const nextConfig = {

}

export default withYakSwc({
    experiments: {
        crossFileSelectors: true
    }
}, nextConfig)
