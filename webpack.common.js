const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './client/src/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'client/public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.html/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|gif|jpg)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['client/public']),
        new HTMLWebpackPlugin({
            template: './client/src/templates/index.html',
            excludeChunks: ['server']
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};