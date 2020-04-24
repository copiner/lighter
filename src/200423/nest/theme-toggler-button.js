import React from 'react';
import {ThemeContext} from './theme-context';

let a = '250';

function dec2hex(str){
    var dec = str.toString().split(''), sum = [], hex = [], i, s;
    //console.log(1 * dec.shift())
    while(dec.length){
        s = 1 * dec.shift()
        for(i = 0; s || i < sum.length; i++){
            console.log('s',s)
            s += (sum[i] || 0) * 10
            console.log(s)
            sum[i] = s % 16
            console.log(sum[i])
            s = (s - sum[i]) / 16
            console.log('e',s)
        }
    }
    console.log(...sum)
    while(sum.length){
        hex.push(sum.pop().toString(16))
    }
    return hex.join('');
}

console.log(dec2hex(a).toUpperCase())

function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );

}

export default ThemeTogglerButton;
