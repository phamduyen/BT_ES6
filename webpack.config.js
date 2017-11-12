const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './server/app.js', //webpack sẽ đọc thằng này đầu tiên
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", // file được build ra sẽ là file này
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                    }
                ]
            }
        ],
        loaders: [
            {test: /\.hbs$/, loader: "handlebars-loader"},
            {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './server/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    devtool: 'inline-source-map'
}