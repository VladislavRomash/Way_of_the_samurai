import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {store, StoreType} from './store/store';


const reRenderTree = (store: StoreType) => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
};

reRenderTree(store)
store.subscribe(reRenderTree)

