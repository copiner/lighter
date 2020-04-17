const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: {
     app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle-[hash].js',
    chunkFilename: 'vendor-[hash].js',
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
                test: /\.css$/,
                use: [

                  'style-loader',

                  MiniCssExtractPlugin.loader,

                  {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap:true,
                        importLoaders: 1
                    }
                  },
                  { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    plugins: [
         new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
         }),
         new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'Hello World',
            filename: 'index.html'
         }),
         new CleanWebpackPlugin(),
         new CompressionPlugin(),
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'index-[hash].css',
            chunkFilename: 'index-[id].css',

            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
     ]
}
