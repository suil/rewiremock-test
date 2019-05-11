const webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');
const rewireMockPlugin = require('rewiremock/webpack/plugin');

module.exports = {
    entry: './src/do-thing',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    target: 'node',
    devtool: 'source-map',
    mode: 'development',
    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new rewireMockPlugin()
    ]
}