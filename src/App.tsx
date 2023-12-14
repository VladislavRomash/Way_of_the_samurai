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
import {StateType} from './state/State';

type PropsType = {
    state: StateType
    addPost: () => void
    changeNewTitlePost: (title: string) => void
}

function App(props: PropsType) {

    const {state, addPost, changeNewTitlePost} = props

    return (
        <BrowserRouter>

            <div className="appWrapper">

                <Header/>

                <Navigation/>

                <div className="appWrapperContent">
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={state.dialogPage}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile state={state.profilePage}
                                                  addPost={addPost}
                                                  changeNewTitlePost={changeNewTitlePost}/>}/>
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
