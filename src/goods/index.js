import React from "react"
import ReactDOM from "react-dom"

import GoodsListTable from "./table";
// import 'antd/dist/antd.css';

let render = ()=>{
  ReactDOM.render(
    <GoodsListTable />,
    document.getElementById("root")
  );
}

export default render;
