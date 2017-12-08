const webpack = require('webpack');
const path =require('path');
module.exports = {
  entry:{
     app: path.join(__dirname,'src','index.js')
  },
  output:{
     filename:'bundle.js',
     path:path.join(__dirname,'build')
   },
   devServer: {
       contentBase: path.join(__dirname, "build"),//它指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录
       overlay: true,//这个配置属性用来在编译出错的时候，在浏览器页面上显示错误
       inline: true,
       hot: true,
       historyApiFallback:{
         rewrites:[
            {from:/./,to:'/error.html'}
         ]
      },
      stats: "errors-only"
   },
   plugins:[
      new webpack.HotModuleReplacementPlugin()
   ]
}


//node_modules/.bin/webpack-dev-server
//than
//localhost:8080


//webpack打包和webpack-dev-server开启服务的区别:
//webpack输出真实的文件，而webpack-dev-server输出的文件只存在于内存中,并不输出真实的文件.

//使用纯node的API实现，下面是一个官方给的例子
// var config = require("./webpack.config.js");
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
// var compiler = webpack(config);
// var server = new WebpackDevServer(compiler, {
//        /*我们写入配置的地方*/
// });
// server.listen(8080);
