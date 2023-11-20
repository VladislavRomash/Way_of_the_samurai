import React from 'react';
import './App.css'
import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {Dialogs} from './components/dialogs/Dialogs';
import {Profile} from './components/profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {Settings} from './components/settings/Settings';

function App() {
    return (
        <BrowserRouter>

            <div className="appWrapper">

                <Header/>

                <Navigation/>

                <div className="appWrapperContent">
                    <Route exact
                           path={'/dialogs'}
                           component={Dialogs}/>
                    <Route exact
                           path={'/profile'}
                           component={Profile}/>
                    <Route exact
                           path={'/news'}
                           component={News}/>
                    <Route exact
                           path={'/music'}
                           component={Music}/>
                    <Route exact
                           path={'/settings'}
                           component={Settings}/>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
