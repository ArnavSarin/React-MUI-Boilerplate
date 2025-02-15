/** @type {import('next').NextConfig} */

//NEXT-JS LATEST USES WEBPACK AS A BUNDLER BY DEFAULT
module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'], // Enables importing SVGs as React components
        });
        //TODO: REMOVE THIS AND URL-LOADER AND FILE-LOADER FROM PACKAGE.JSON
        //TODO: FIX ALL COLORS TO BE IN ONE AREA FOR THEMEING
        config.module.rules.push({
            test: /\.(jpe?g|gif|png)$/i,
            loader: 'url-loader',
            options: {
                limit: 10000,
            },
        });
        return config;
    },
};
