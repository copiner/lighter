//webpack [--config webpack.config.js]
//npm test
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../build'),
  }
};
