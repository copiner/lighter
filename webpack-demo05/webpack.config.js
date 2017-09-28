
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
      },
      //{test: /\.js$/, exclude: "./node_modules/", loader:"babel-loader", query: {presets: ['latest']} }
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'  //npm官网查看各个loaders的资料
        //or
        //loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader' //npm官网查看各个loaders的资料
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // {
      //   test: /\.(png|jpg)$/i,
      //   loader: 'file-loader' //npm官网查看各个loaders的资料
      // },
      // {
      //   test: /\.(png|jpg|svg)$/i,
      //   loader: 'url-loader', //npm官网查看各个loaders的资料
      //   query: {
      //     limit:  50000,
      //     name: 'assets/[name].[ext]'  //图片打包base64编码
      //   }
      // },
      {
        test: /\.(png|jpg|svg)$/i,
        loaders: [
          'url-loader?limit=20000&name=assets/[name].[ext]'
          //'image-webpack-loader'//压缩图片
        ] //npm官网查看各个loaders的资料
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
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
