import React from 'react';
import ReactDom from 'react-dom';
import loadable from '@loadable/component'

const Button = loadable(() => import(/* webpackChunkName: "item" */'./item'))

let render = () =>{
  ReactDom.render(
      <Button/>,
      document.getElementById('root')
  );
}

export default render;
