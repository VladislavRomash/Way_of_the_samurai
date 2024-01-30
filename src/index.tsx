import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {store, RootType} from './store/storeRedux';


const reRenderTree = (state: RootType) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
};

reRenderTree(store.getState())
store.subscribe(() => reRenderTree(store.getState()))

