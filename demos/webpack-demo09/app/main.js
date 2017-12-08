//1
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

//2
import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';
import './main.css';

console.log(process.env.NODE_ENV); //production package.json scripts.build
console.log("xjx");
console.log("wds");

ReactDOM.render(
  <Greeter />,
  document.getElementById('root')
);

// import React from 'react';
// import {render} from 'react-dom'; //export render; export default render
// import Greeter from './Greeter';
//
// import './main.css';
//
// render(
//   <Greeter />,
//   document.getElementById('root')
// );
