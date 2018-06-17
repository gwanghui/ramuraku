const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../public/src/index.html"),
    favicon: path.join(__dirname, "../public/src/favicon.png"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'ramuraku.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /.s?css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                use: ['file-loader'],
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};
