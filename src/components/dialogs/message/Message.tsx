import React, {ChangeEvent, FC} from 'react';
import {Route} from 'react-router-dom';
import style from './Message.module.css';
import {ActionDialogType, addMessageAC, changeTitleMessageAC} from '../../../reducers/dialogReducer';

type PropsType = {
    id: number
    title: string
    initialValue: string
    dispatch: (action: ActionDialogType) => void
}

export const Message: FC<PropsType> = (props) => {

    const {id, title, initialValue, dispatch} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTitleMessageAC(e.currentTarget.value))
    }

    const onClickHandler = () => {
        dispatch(addMessageAC(id))
    }

    return (
        <Route path={`/dialogs/${id}`}>
            <div className={style.message}>
                {title}
            </div>
            <div>
                <input value={initialValue} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>+</button>
            </div>
        </Route>
    );
};