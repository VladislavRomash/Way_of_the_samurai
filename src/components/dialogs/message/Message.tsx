import React, {FC} from 'react';
import {Route} from 'react-router-dom';
import style from './Message.module.css';

type PropsType = {
    id: number
    title: string
}

export const Message: FC<PropsType> = (props) => {

    const {id, title} = props

    return (
        <Route path={`/dialogs/${id}`}>
            <div className={style.message}>
                {title}
            </div>
        </Route>
    );
};