const webpack = require('webpack');
const { resolve } = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
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
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
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
                    //"style-loader",
                    {
                       loader: MiniCssExtractPlugin.loader,
                       options: {
                         //publicPath: '../',
                         esModule: true,
                         // only enable hot in development
                         hmr: isDev,
                         // if hmr does not work, this is a forceful method.
                         reloadAll: true
                       }
                    },
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
      new HtmlWebpackPlugin({
        title: 'Hello World'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index-[hash].css'
      })
    ],
    optimization: {
      splitChunks: {
          chunks: "async",
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
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
      contentBase: resolve(__dirname, "build"),
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
