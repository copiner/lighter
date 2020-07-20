import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';

//由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
//import 'antd/dist/antd.css';
moment.locale('zh-cn');


import loadable from '@loadable/component'

const App = loadable(() => import(/* webpackChunkName: "antdItem" */'./item'))


let render = ()=>{
  ReactDom.render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>,
    document.getElementById('root'));
}

export default render;
