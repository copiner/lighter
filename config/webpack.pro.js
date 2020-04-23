const Webpack = require('webpack');
const { resolve } = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlWebpackkPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: {
     app: './src/index.js'
  },
  output: {
    path: resolve(__dirname, '../build'),
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
                    limit: 8*1024
                  }
                }
              ]
            },
            {
                test: /\.css$/,
                use: [
                  //'style-loader',
                  MiniCssExtractPlugin.loader,

                  {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 1
                    }
                  },
                  { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    plugins: [
         new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'Hello World'
         }),
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({
            filename: '[hash].css',
            ignoreOrder: false
        }),
        new Webpack.DllReferencePlugin({
          manifest:resolve(__dirname,'../dll/manifest.json')
        }),
        new AddAssetHtmlWebpackkPlugin([
          // {filepath:resolve(__dirname,'../dll/jquery.js')},
          {filepath:resolve(__dirname,'../dll/react.js')}
        ])
    ]
}
