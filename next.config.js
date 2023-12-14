/** @type {import('next').NextConfig} */

const webpack = require('webpack');

const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.glb$/,
            loader: 'gltf-loader',
        });
        return config;
    },
}

module.exports = nextConfig
