import ReactDOM from 'react-dom';
import App from '../App';
import {addPost, changeNewTitlePost, StateType} from '../state/State';
import React from 'react';

export const reRenderFoo = (state: StateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             changeNewTitlePost={changeNewTitlePost}
        />, document.getElementById('root')
    );
};