const webpack = require('webpack');
const path = require("path");

const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: "production",
  entry: {
     app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle-[hash].js',
    publicPath:'/'
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
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                },
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
              ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [

                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ]
            }
        ]
    },
    plugins: [
         new HtmlPlugin({
            template: "./src/index.html"
         }),
         new CleanWebpackPlugin(),
         new CompressionPlugin(),
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',

            ignoreOrder: false, // Enable to remove warnings about conflicting order
          })
     ],
     optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors-[hash].js',
              chunks: 'all'
            }
          }
       }
    }
}
