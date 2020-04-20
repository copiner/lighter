import React from 'react';
import ReactDom from 'react-dom';
import asyncComponent from './util/';

//import Button from './button';
const Button = asyncComponent(() => import('./button'));

let render = () =>{
  ReactDom.render(
      <Button/>,
      document.getElementById('root')
  );
}

export default render;

// console.log(VERSION); // 打印 Running App version 5fa3b9
// console.log(PRODUCTION); // 打印 true
// console.log(process.env); // 打印 { NODE_ENV: undefined }

// async function getComponent() {
//
//    const element = document.createElement('div');
//    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
//
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//    return element;
// }
//
// getComponent().then(component => {
//   document.body.appendChild(component);
// });
