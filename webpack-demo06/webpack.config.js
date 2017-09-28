const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        //or
        //loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|svg)$/i,
        loaders: [
          'url-loader?limit=51200'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: "body"
    })
  ]
};

module.exports = config;
