//usage:
//webpack-dev-middleware
//webpack-hot-middleware  HMR(webpack-hot-middleware）
var express = require('express')
var webpack = require('webpack')
var path = require('path')
var app = express()
var webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var compiler = webpack({
    entry:["./src/a.js",
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
    ],
    output: {
        path: path.resolve(__dirname, './build/'),
        filename:'bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
})
var options ={
    publicPath: "/",
}
app.use(webpackMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('build'))
app.listen(8080, function () {
    console.log('Example app listening on!')
})
