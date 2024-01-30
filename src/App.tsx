import React from 'react';
import './App.css'
import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {Profile} from './components/profile/Profile';

function App() {

    return (
        <BrowserRouter>

            <div className="appWrapper">

                <Header/>

                <Navigation/>

                <div className="appWrapperContent">
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;
