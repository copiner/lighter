const element = document.createElement('div');
element.setAttribute("id","root");
document.body.appendChild(element);

// import render from './200417/';
//
// render();

// import wind from './191221/';
//
// console.log(wind)

import hh from './200423/';

hh();

if (module.hot) {
  // module.hot 为 true 则开启HMR功能
  module.hot.accept('./200423/index.js', () => {
    // 监听index.js变化，发生变化，执行该回调函数
    hh();
  });
}
