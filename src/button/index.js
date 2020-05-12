import React from 'react';
import ReactDom from 'react-dom';
import asyncComponent from './util/';

// import Button from './button';
const Button = asyncComponent(() => import('./button'));


let render = () =>{
  ReactDom.render(
      <Button/>,
      document.getElementById('root')
  );
}

export default render;
