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
import {ActionType, StateType} from './store/store';

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App(props: PropsType) {

    const {state, dispatch} = props

    return (
        <BrowserRouter>

            <div className="appWrapper">

                <Header/>

                <Navigation/>

                <div className="appWrapperContent">
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={state.dialogPage}
                                                  dispatch={dispatch}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile state={state.profilePage}
                                                  dispatch={dispatch}/>}/>
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
