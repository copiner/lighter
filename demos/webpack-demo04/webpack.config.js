
var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./dist",
    filename: "js/[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src/'),
        exclude: path.resolve(__dirname, './node_modules/'),
        loader: 'babel-loader'
      }
      //{test: /\.js$/, exclude: "./node_modules/", loader:"babel-loader", query: {presets: ['latest']} }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: "index.html",
      inject: "body"
    })
  ]
}
