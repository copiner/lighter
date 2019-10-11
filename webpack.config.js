const webpack = require('webpack');
const path = require("path");

const HtmlPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  devtool: 'eval-source-map', //source maps
  //entry:  __dirname + "/src/index.js",
  entry: {
     //vendor: ['helper', 'lib'],
     app: './src/index.js'
  },
  output: {
    path: __dirname + "/build",
    //filename: "bundle-[hash].js"
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    //historyApiFallback: true,
    host:"127.0.0.1",
    port: 9000,
    compress: true,
    inline: true,
    hot: true
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
                    //fallback: 'file-loader'//If the file is greater than the limit (in bytes) the file-loader is used by default
                  }
                }
              ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    {
                      loader: MiniCssExtractPlugin.loader,
                       options: {
                         // you can specify a publicPath here
                         // by default it uses publicPath in webpackOptions.output
                         //publicPath: '../',
                         // only enable hot in development
                         hmr: process.env.NODE_ENV === 'development',
                       },
                   },
                   'css-loader',
                   // Compiles Sass to CSS
                   'sass-loader'
                ]
            }
        ]
    },
    plugins: [
         new HtmlPlugin({
            template: __dirname + "/src/index.html"
         }),
         //new webpack.NamedModulesPlugin(),
         //new webpack.HotModuleReplacementPlugin(),

         new CompressionPlugin(),
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            //filename: '[name].css',
            //chunkFilename: '[id].css',
            filename:"index.css",

            ignoreOrder: false, // Enable to remove warnings about conflicting order
          })
     ],
     optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'vendor',
              chunks: 'all',
            }
          }
        }
      }
}
