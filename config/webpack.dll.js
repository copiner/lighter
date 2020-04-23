/*
dll 单独打包
webpack.DllPlugin
webpack.DllReferencePlugin
add-asset-html-webpack-plugin
*/
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
      react:['react','redux']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'../dll'),
        library:'[name]'
    },
    //plugins
    plugins:[
        new webpack.DllPlugin({
            name:'[name]',
            path:resolve(__dirname,'../dll/manifest.json'),
        })
    ],

    //development || production
    mode:'development'
}
