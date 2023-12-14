import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {StateType, store} from './store/store';


const reRenderTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             changeNewTitlePost={store.changeNewTitlePost.bind(store)}/>,
        document.getElementById('root')
    );
};

reRenderTree(store.getState())
store.subscribe(reRenderTree)

