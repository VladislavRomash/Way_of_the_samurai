import React from 'react';
import style from './Dialogs.module.css'
import {NavLink, Route} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>

                <div className={`${style.dialog} ${style.active}`}>
                    <NavLink to={'/dialogs/1'}>Dima</NavLink>
                </div>

                <div className={style.dialog}>
                    <NavLink to={'/dialogs/2'}>Ann</NavLink>
                </div>

                <div className={style.dialog}>
                    <NavLink to={'/dialogs/3'}>Max</NavLink>
                </div>

            </div>

            <div className={style.messagesItems}>

                <Route path={'/dialogs/1'}>
                    <div className={style.message}>
                        Hi
                    </div>
                </Route>

                <Route path={'/dialogs/2'}>
                    <div className={style.message}>
                        How are you?
                    </div>
                </Route>

                <Route path={'/dialogs/3'}>
                    <div className={style.message}>
                        Yo
                    </div>
                </Route>

            </div>
        </div>
    );
};