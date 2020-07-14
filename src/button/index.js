import React from 'react';
import ReactDom from 'react-dom';

import asyncComponent from './util/';
// import Button from './item';
//const Button = asyncComponent(() => import('./item'));

const Button = () => import(/* webpackChunkName: "button" */'./item');

let render = () =>{
  ReactDom.render(
      <Button/>,
      document.getElementById('root')
  );
}

export default render;
