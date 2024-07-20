const { withYak } = require('next-yak/withYak');

/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = withYak({
    experiments: {
        crossFileSelectors: true
    }
}, nextConfig)
