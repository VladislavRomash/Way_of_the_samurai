import React, {FC} from 'react';
import style from './Dialogs.module.css'
import {UsersList} from './usersList/UsersList';
import {Message} from './message/Message';
import {MessagesType, UserType} from '../../reducers/dialogReducer';

type PropsType = {
    users: UserType[]
    messages: MessagesType[]
    currentValue: string
    addMessage: (id: number) => void
    changeCurrentTitle: (title: string) => void
}

export const Dialogs: FC<PropsType> = (props) => {

    const {users, messages, currentValue, addMessage, changeCurrentTitle} = props

    const mappedUsersList = users.map(m => <UsersList key={m.id}
                                                      id={m.id}
                                                      name={m.name}
                                                      avatar={m.avatar}/>
    )

    const mappedMessage = messages.map(m => <Message key={m.id}
                                                     id={m.id}
                                                     title={m.title}
                                                     currentValue={currentValue}
                                                     addMessage={addMessage}
                                                     changeCurrentTitle={changeCurrentTitle}/>
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