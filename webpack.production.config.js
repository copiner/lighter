const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //source maps
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle-[hash].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    inline: true
  },
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
               test: /\.(png|jpg|gif|ico)$/,
               use: [
                 {
                   loader: 'url-loader',
                   options: {
                     limit: 8192
                   }
                 }
               ]
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                }
              ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: {
                        loader: "css-loader",
                        options: {
                          modules: true
                        }
                       },
                  publicPath: "/dist"
                })
            }
        ]
    },
    plugins: [
         new webpack.BannerPlugin('xjx'),
         new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
         }),
         new webpack.optimize.OccurrenceOrderPlugin(),//OccurenceOrderPlugin 内置
         new webpack.optimize.UglifyJsPlugin(), //UglifyJsPlugin 内置
         new ExtractTextPlugin({//npm install --save-dev extract-text-webpack-plugin
            filename: "bundle-[hash].css",
            disable: false,
            allChunks: true
         })
     ]
}
