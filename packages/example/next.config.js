const { withYakSwc } = require('next-yak/withYak');

/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = withYakSwc({
    experiments: {
        crossFileSelectors: true
    }
}, nextConfig)
