import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {store, RootType} from './store/storeRedux';
import {MyProvider} from './context/MyProvider';


const reRenderTree = (state: RootType) => {
    ReactDOM.render(
        <MyProvider store={store}>
            <App state={state}/>
        </MyProvider>,
        document.getElementById('root')
    );
};

reRenderTree(store.getState())
store.subscribe(() => reRenderTree(store.getState()))

