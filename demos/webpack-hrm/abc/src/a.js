// a.js
var b = require("./b.js")
b.b()

//为了让 HMR 知道 a、b 文件是可以热加载的，必须在入口文件内（也就是 a.js)内的尾部加入代码：
if(module.hot){
  module.hot.accept();
}
