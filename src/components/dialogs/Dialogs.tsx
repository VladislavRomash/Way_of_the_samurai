import React, {FC} from 'react';
import style from './Dialogs.module.css'
import {UsersList} from './usersList/UsersList';
import {Message} from './message/Message';
import {DialogType} from '../../store/store';
import {ActionDialogType} from '../../reducers/dialogReducer';

type PropsType = {
    state: DialogType
    dispatch: (action: ActionDialogType) => void
}

export const Dialogs: FC<PropsType> = (props) => {

    const {state, dispatch} = props

    const mappedUsersList = state.users.map(m => <UsersList key={m.id}
                                                            id={m.id}
                                                            name={m.name}
                                                            avatar={m.avatar}/>
    )

    const mappedMessage = state.messages.map(m => <Message key={m.id}
                                                           id={m.id}
                                                           title={m.title}
                                                           initialValue={state.newTitleMessage}
                                                           dispatch={dispatch}/>
    )

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {mappedUsersList}
            </div>
            <div className={style.messagesItems}>
                {mappedMessage}
            </div>
        </div>
    );
};