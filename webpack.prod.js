const path = require('path');
// const glob = require('glob')
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const { PurgecssPlugin } = require('purgecss-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// const PATHS = {
//     src: path.join(__dirname, 'src')
// }

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash].js',
        assetModuleFilename: 'img/[hash][ext]',
        clean: true,
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        `...`,
        new CssMinimizerPlugin(),
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.squooshMinify,
                options: {
                // Your options for `squoosh`
            },
            },
        }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main-[contenthash].css',
        }),
        // new PurgecssPlugin({
        //     paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        // }),
    ],
});