/**
 * Created by amoroz-prom on 06.09.15.
 */
var extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        moduleDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader:'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new extractTextPlugin('bundle.css')
    ]
};