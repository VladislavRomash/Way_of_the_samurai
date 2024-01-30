import React, {ChangeEvent, FC} from 'react';
import {Route} from 'react-router-dom';
import style from './Message.module.css';

type PropsType = {
    id: number
    title: string
    currentValue: string
    addMessage: (id: number) => void
    changeCurrentTitle: (title: string) => void
}

export const Message: FC<PropsType> = (props) => {

    const {id, title, currentValue, addMessage, changeCurrentTitle} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeCurrentTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        addMessage(id)
    }

    return (
        <Route path={`/dialogs/${id}`}>
            <div className={style.message}>
                {title}
            </div>
            <div>
                <input value={currentValue} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>+</button>
            </div>
        </Route>
    );
};