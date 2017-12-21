
为了让 HMR 知道文件是可以热加载的，必须在入口文件内内的尾部加入以下代码：

```
if(module.hot){
  module.hot.accept();
}
```
