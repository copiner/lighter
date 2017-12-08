//配置详细内容参考官方文档
const webpack = require('webpack');
const path = require("path");
//要使用某个插件，我们需要通过npm安装它，
//然后要做的就是在webpack配置中的plugins关键字部分添加该插件的一个实例.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //source maps
  entry:  __dirname + "/app/main.js",
  output: {
    //path: __dirname + "/public",
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devServer: { //Webpack提供一个可选的本地开发服务器 npm install --save-dev webpack-dev-server 配置信息如下
    //contentBase: "./public",//本地服务器所加载的页面所在的目录
    contentBase: path.join(__dirname, "build"),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,
    inline: true //设置为true，当源文件改变时会自动刷新页面
  },
  module: {//npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    // options: { 若有.babelrc文件进行了配置，则这里就不用配置了。
                    //     presets: [
                    //         "es2015", "react"
                    //     ]
                    // }
                },
                exclude: /node_modules/
            },
            {//npm install --save-dev style-loader css-loader
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                      loader: "css-loader",
                      options: { //CSS模块化配置
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
         new webpack.BannerPlugin('xjx'),
         new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
         }),
         new webpack.DefinePlugin({
             'process.env': {
                 NODE_ENV: '"production"'
             }
         }),
         new webpack.HotModuleReplacementPlugin()//热加载插件
     ]
}

//npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，
//如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}
//例如如本例中npm run server

//bable的配置还可以放在.babelrc文件中进行


//Webpack从一开始就对CSS模块化(CSS module)提供了支持，在CSS loader中进行配置后，
//你所需要做的一切就是把modules传递到所需要的地方，然后就可以直接把CSS的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中使用相同的类名造成冲突
//CSS modules 也是一个很大的主题，有兴趣的话可以去官方文档查看更多消息


//使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀
//npm install --save-dev postcss-loader


//npm install --save-dev html-webpack-plugin
//在app目录下，创建一个index.tmpl.html文件模板，这个模板包含title等必须元素，在编译过程中，插件会依据此模板生成最终的html页面，
//会自动添加所依赖的 css, js，favicon等文件


//Hot Module Replacement
//Babel和webpack是独立的工具
//二者可以一起工作
//二者都可以通过插件拓展功能
//HMR是一个webpack插件，它让你能浏览器中实时观察模块修改后的效果，
//但是如果你想让它工作，需要对模块进行额外的配额.
//Babel有一个叫做react-transform-hrm的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作；
//安装react-transform-hmr
//npm install --save-dev babel-plugin-react-transform react-transform-hmr
//然后在.babelrc文件中配置,现在当你使用React时，可以热加载模块了,每次保存就能在浏览器上看到更新内容


//通过配置了DefinePlugin，那么这里面的标识就相当于全局变量，你的业务代码可以直接使用配置的标识
//  new webpack.DefinePlugin({
//       'process.env': {
//           NODE_ENV: '"production"'
//       }
//  }),

// if (process.env.NODE_ENV){
//     // 任意代码
//     console.log("production");
// }


//webpack输出真实的文件，而webpack-dev-server输出的文件只存在于内存中,不输出真实的文件
