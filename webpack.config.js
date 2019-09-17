const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map', //source maps
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle-[hash].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    inline: true,
    hot: true,
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
                   loader: 'url-loader',
                   options: {
                     limit: 8192
                     //fallback: 'file-loader'//If the file is greater than the limit (in bytes) the file-loader is used by default
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
                use: [
                    { loader: "style-loader" },
                    {
                      loader: "css-loader",
                      options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
         new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
         }),
         new webpack.NamedModulesPlugin(),
         new webpack.HotModuleReplacementPlugin()
     ]
}
