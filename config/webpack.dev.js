const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'development'

console.log(process.env.NODE_ENV);
console.log(isProd);

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
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

                    "style-loader",

                    {
                       loader: MiniCssExtractPlugin.loader,
                       options: {
                         /*
                          you can specify a publicPath here，
                          by default it uses publicPath in webpackOptions.output
                         */
                         //publicPath: '../',
                         esModule: true,
                         // only enable hot in development
                         hmr: process.env.NODE_ENV === 'development',
                         // if hmr does not work, this is a forceful method.
                         reloadAll: true
                       }
                    },
                    {
                      loader: 'css-loader',
                      options: {
                          // modules: true,
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
      new HtmlWebpackPlugin({ //打包输出HTML
        title: 'Hello World',
        filename: 'index.html'
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),

      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'index-[hash].css',
        chunkFilename: 'index-[hash].css',

        ignoreOrder: false // Enable to remove warnings about conflicting order
      })
    ],
    optimization: {
        splitChunks: {
          //chunks: "all",// all async initial
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: true,
          cacheGroups: {
              vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  priority: -10
              },
              default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true
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
