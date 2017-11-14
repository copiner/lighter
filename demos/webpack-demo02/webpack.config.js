//if  scripts in package.json  include scripts.webpack thus run this in terminal "npm run webpack"
//about node.js

var htmlWebpackPlugin = require("html-webpack-plugin");

//single page application

/*module.exports = {
  entry: ["./src/script/main.js", "./src/script/app.js"],// string | object | array
  output: {
    path: "./dist", // string
    filename: "bundle.js" // string
  }
} */

//multiple page application
module.exports = {
  entry: {
    index: "./src/script/main.js",
    about: "./src/script/app.js"
  },// string | object | array
  output: {
    path: "./dist", // string
    filename: "js/[name].bundle.js", // string
    publicPath: 'https://copiner.com/'
    //filename: "[hash].bundle.js", // string

    //chunkFilename: "[id].bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html', //生成html名字
      template:  'index.html',
      inject:  false,
      //inject: "head",   //插入header标签里
      title: "webpack-demo01",
      date: new Date()
      /*minify: { //压缩生成文件
        removeComments: true,  //删除注释
        collapseWhitespace: true  //删除空格
      }*/
    })
  ]
}
