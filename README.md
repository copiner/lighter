### web pack entry

* Entry: 入口, webpack执行构建的第一步将从Entry开始，可抽象成输入

* Module: 模块，在webpcak中一切皆模块，一个模块对应一个文件。webpack会从配置的Entry开始递归找出所有依赖的模块。

* Chunk: 代码块，一个Chunk由多个模块组合而成，用于代码合并于分割

* Loader: 模块转换器，用于将模块的原内容按照需求转换成新内容。

* Plugin: 扩展插件，在webpcak构建流程中的特定时机注入扩展逻辑，来改变构建结果或做我们想要的事情

* Outout: 输出结果，再webpack经过一些列处理并得出最终想要的代码后输出结果

     webpcak在启动后会从Entry里配置的Module开始，递归解析Entry依赖的所有Module.每找到一个Module,就会根据配置的Loader去找出对应的转换规则，对Module进行转换后，再解析出当前Module依赖的Module。这些模块会以Entry为单位进行分组，一个Entry及其所有依赖的Module被分到一个组也就是一个Chunk.最后，webpack会将所有Chunk转换成文件输出。在整个流程中，webpack会在恰当的时机执行Plugin里定义的逻辑。
