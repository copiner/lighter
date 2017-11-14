
var htmlWebpackPlugin = require("html-webpack-plugin");

//multiple page application
module.exports = {
  entry: {
    main: "./src/script/main.js",
    a: "./src/script/a.js",
    b: "./src/script/b.js",
    c: "./src/script/c.js"
  },// string | object | array
  output: {
    path: "./dist", // string
    filename: "js/[name].bundle.js", // string
    publicPath: 'https://copiner.com/'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'a.html',
      template: "index.html",
      //inject: "body",
      inject: false,
      title: "this is a",
      excludeChunks: ["b", "c"]
      //chunks: ['main', 'a'],

    }),
    new htmlWebpackPlugin({
      filename: 'b.html',
      template: "index.html",
      //inject: "body",
      inject: false,
      title: "this is a",
      excludeChunks: ["a", "c"] //exclude c chunk, others all add
    }),
    new htmlWebpackPlugin({
      filename: 'c.html',
      template: "index.html",
      //inject: "body",
      inject: false,
      title: "this is a",
      //chunks: ['c']
      excludeChunks: ["a", "b"]
    })
  ]
}
