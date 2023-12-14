import React, {FC} from 'react';
import style from './Dialogs.module.css'
import {UsersList} from './usersList/UsersList';
import {Message} from './message/Message';
import {DialogType} from '../../store/store';

type PropsType = {
    state: DialogType
}

export const Dialogs: FC<PropsType> = (props) => {

    const {state} = props

    const mappedUsersList = state.users.map(m => <UsersList key={m.id}
                                                            id={m.id}
                                                            name={m.name}
                                                            avatar={m.avatar}/>
    )

    const mappedMessage = state.messages.map(m => <Message key={m.id}
                                                           id={m.id}
                                                           title={m.title}/>
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