import React from 'react';
import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>

                <div className={`${style.dialog} ${style.active}`}>
                    Dima
                </div>

                <div className={style.dialog}>
                    Ann
                </div>

                <div className={style.dialog}>
                    Igor
                </div>

            </div>

            <div className={style.messagesItems}>

                <div className={style.message}>
                    Hi
                </div>

                <div className={style.message}>
                    How are you?
                </div>

                <div className={style.message}>
                    Yo
                </div>

            </div>
        </div>
    );
};