import React from 'react';
import './App.css'
import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {Dialogs} from './components/dialogs/Dialogs';
import {Profile} from './components/profile/Profile';

function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <Navigation/>

            <div className="appWrapperContent">
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;
