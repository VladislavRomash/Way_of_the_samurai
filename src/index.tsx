import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './state/State';
import {addPost} from './state/State';


ReactDOM.render(
    <App state={state}
         addPost={addPost}
    />,
    document.getElementById('root')
);