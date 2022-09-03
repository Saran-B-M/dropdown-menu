const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: "inline-source-map", 
    devServer: {
        static: "./src"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "dropDown",
        template: "./src/index.html",
    })]

}

module.exports = config;