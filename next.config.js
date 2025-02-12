/** @type {import('next').NextConfig} */

//NEXT-JS LATEST USES WEBPACK AS A BUNDLER BY DEFAULT
module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'], // Enables importing SVGs as React components
        });
        return config;
    },
};
