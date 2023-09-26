const { withYak } = require('next-yak/withYak');

/** @type {import('next').NextConfig} */
const nextConfig = {

}

const yakConfig = {
	configPath: "./yak.config.ts",
}

module.exports = withYak(yakConfig, nextConfig)
