// webpack --config webpack.dev.config.js
module.exports = {
  entry: "./src/script/main.js", // string | object | array
  output: {
    path: "./dist", // string
    filename: "bundle.js" // string
  }
}
