import {addPost, changeNewTitlePost, state, StateType, subscribe} from './state/State';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';


const reRenderTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             changeNewTitlePost={changeNewTitlePost}
        />, document.getElementById('root')
    );
};

reRenderTree(state)
subscribe(reRenderTree)

