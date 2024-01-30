import React from 'react';
import './App.css'
import {Header} from './components/header/Header';
import {Navigation} from './components/navigation/Navigation';
import {Profile} from './components/profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {Settings} from './components/settings/Settings';
import {RootType} from './store/storeRedux';
import {DialogsContainer} from './components/dialogs/DialogsContainer';

type PropsType = {
    state: RootType
}

function App(props: PropsType) {

    const {state} = props

    return (
        <BrowserRouter>

            <div className="appWrapper">

                <Header/>

                <Navigation/>

                <div className="appWrapperContent">
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile state={state.profilePage}/>}/>
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
