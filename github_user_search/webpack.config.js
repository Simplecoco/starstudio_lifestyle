var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');

module.exports= {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },


    devtool: 'eval-source-map',

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
        // progress: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.scss$/,
                loader:"style-loader!css-loader!sass-loader"
                // loader:'isomorphic-style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader'
            },
            {
                test:/\.css$/,
                include: APP_PATH,
                loader:'style-loader!css-loader'
            }

        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app'
        }),
        new ExtractTextPlugin("style.css")
    ],

    resolve: {
        extensions: [' ', '.js', '.jsx']
    }
};


