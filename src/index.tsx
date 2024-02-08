import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {store} from './store/storeRedux';
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);