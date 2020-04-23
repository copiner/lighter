import React from 'react';
import ReactDom from 'react-dom';

import Hook from './hook';

let render = () =>{
  ReactDom.render(
      <Hook/>,
      document.getElementById('root')
  );
}

export default render;
