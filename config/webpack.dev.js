const webpack = require('webpack');
const path = require("path");

const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
     app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
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
                    MiniCssExtractPlugin.loader,

                    "style-loader",

                     'css-loader',
                     // Compiles Sass to CSS
                     'sass-loader'
                ]
            }
        ]
    },
    plugins: [
         new HtmlPlugin({
            template: "./src/index.html"
         }),
         new CleanWebpackPlugin(),
         new webpack.HotModuleReplacementPlugin(),

         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            //filename: '[name].css',
            //chunkFilename: '[id].css',
            filename:"index.css",

            ignoreOrder: false // Enable to remove warnings about conflicting order
          })
     ],
     optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
       }
    },
   devServer: {
      contentBase: path.resolve(__dirname, "build"),
      historyApiFallback: true,
      host:"127.0.0.1",
      port: 9000,
      inline: true,
      hot: true,
      // proxy: {
      //    '/api': {
      //      target: 'http://192.168.23.213:8080',
      //      pathRewrite: {'^/api' : ''}
      //    }
      //  }
    }
}
