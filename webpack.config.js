/* global require, module, console, __dirname*/

const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {
    const config = {
        entry: {
            'dist/main': './main.ts'
        },

        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname)
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.(t|j)sx?$/,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    enforce: 'pre'
                }
            ]
        },

        devtool: false,
    };

    return config;
};
