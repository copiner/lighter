import React from 'react';
import ReactDom from 'react-dom';

import Hook from './hook';

import { FriendStatus, FriendListItem } from './friends';

let friend = {
  id:1,
  name:'wdaonngg',
  status:{
    isOnline:'Online'
  }
}

let render = () =>{
  ReactDom.render(
      <div>
      <FriendStatus friend={ friend }/>
      <FriendListItem friend={ friend }/>
      <Hook/>
      </div>,
      document.getElementById('root')
  );
}

export default render;
