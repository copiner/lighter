const element = document.createElement('div');
element.setAttribute("id","root");
document.body.appendChild(element);

import ls from './utils/localStorage'
console.log(ls)
// import render from './button/';
//
// render();

// import wind from './hook/';
//
// console.log(wind)

// import hh from './module/';
//
// hh();

/*

import { add } from './util';
import { dec2hex, dec2bin, dec2oct, bin2dec } from './util';
//js支持的整数的有效范围是，-2的53次方至2的53次方

let a = '9007199254740992';

console.log(dec2hex(a).toUpperCase());
// console.log(a.toString(16));
console.log(dec2bin(a));

let b = '100000000000000000000000000000000000000000000000000000';

console.log(bin2dec(b));

*/

import render from './life/';

render()

/*
import render from './state/';

render()
*/
if (module.hot) {
  // module.hot 为 true 则开启HMR功能
  module.hot.accept('./life/app.js', () => {
    // 监听index.js变化，发生变化，执行该回调函数
    render();
  });
}
