import "core-js/stable";
import "regenerator-runtime/runtime";


import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index.js';
import App from './containers/App.js';

import "./index.scss"

let store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
