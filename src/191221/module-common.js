// module-commonjs.js
/*
在 Node.js 模块系统中，每个文件都被视为独立的模块

在执行模块代码之前，Node.js 会使用一个如下的函数包装器将其包装：
有五个变量
(function(exports, require, module, __filename, __dirname) {
// 模块的代码实际上在这里
});

每一个node.js执行文件，都自动创建一个module对象，
同时，module对象会创建一个叫exports的属性，初始化的值是 {}
为了方便，模块中会有一个exports对象和module.exports指向同一块内存。所以初始状态下：

module.exports = exports = {};

exports和module.exports指向同一块内存，但require()返回的是module.exports而不是exports
*/
exports.commonModuleValue1 = "CommonmoduleValue1"
exports.commonModuleValue2 = "CommonmoduleValue2"

module.exports = 'commonModuleDefault';
