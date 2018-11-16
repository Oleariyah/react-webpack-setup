const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcDir = resolve(__dirname, 'src');

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}