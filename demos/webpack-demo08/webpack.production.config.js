//对应package.json build 配置如下
//win         ：  "build": "set NODE_ENV=production webpack --config ./webpack.production.config.js --progress"
//mac linux   ：  "build": "NODE_ENV=production webpack --config ./webpack.production.config.js --progress"

//npm run build
//npm start & npm test are shortcuts for npm run start & npm run test, for any other npm tasks, you have to specify "run"
const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //source maps
  entry:  __dirname + "/app/main.js",
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
                // use: [
                //     { loader: "style-loader" },
                //     {
                //       loader: "css-loader",
                //       options: {
                //             modules: true
                //         }
                //     }
                // ]
            }
        ]
    },
    plugins: [
         new webpack.BannerPlugin('xjx'),
         new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
         }),
         new webpack.HotModuleReplacementPlugin(),
         new webpack.optimize.OccurrenceOrderPlugin(),//OccurenceOrderPlugin 内置
         new webpack.optimize.UglifyJsPlugin(), //UglifyJsPlugin 内置
         new ExtractTextPlugin({//npm install --save-dev extract-text-webpack-plugin
            filename: "bundle-[hash].css",
            disable: false,
            allChunks: true
         })
     ]
}

//webpack提供了一些在发布阶段非常有用的优化插件：
//OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
//UglifyJsPlugin：压缩JS代码；
//ExtractTextPlugin：分离CSS和JS文件
//
//OccurenceOrder 和 UglifyJS plugins 都是内置插件，你需要做的只是安装其它非内置插件
//npm install --save-dev extract-text-webpack-plugin
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

//  "build": "set NODE_ENV=production && webpack -p --progress --profile --colors",
//  "build": "set NODE_ENV=production && webpack --config webpack.production.config.js --progress"
