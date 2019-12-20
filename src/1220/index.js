import "core-js/stable";
import "regenerator-runtime/runtime";

import _ from 'lodash';
import helper from './helper';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index.js';
import App from './containers/App.js';

import "./index.scss"


let store = createStore(reducer);

let render = () =>{
  ReactDom.render(
      <Provider store={store}>
          <App/>
      </Provider>,
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
