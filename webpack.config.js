const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        vendor: './src/vendor.js',    
        hello: {
            import: './src/hello.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    devtool: false,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                    // "style-loader",

                    MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                    "css-loader",
                  // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ],
    },
};