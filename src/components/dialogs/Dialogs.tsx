import React from 'react';
import style from './Dialogs.module.css'
import {UsersList} from './usersList/UsersList';
import {Message} from './message/Message';

export type UserType = {
    id: number
    name: string
    message: string
}

export const Dialogs = () => {

    const users: UserType[] = [
        {id: 1, name: 'Ann', message: 'Hello'},
        {id: 2, name: 'Max', message: 'How are you?'},
        {id: 3, name: 'Dima', message: 'Yo'},
    ]

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {
                    users.map(m => {
                        return (
                            <UsersList key={m.id}
                                       id={m.id}
                                       name={m.name}/>
                        )
                    })
                }

            </div>

            <div className={style.messagesItems}>
                {
                    users.map(m => {
                        return (
                            <Message key={m.id}
                                     id={m.id}
                                     title={m.message}/>
                        )
                    })
                }

            </div>

        </div>
    );
};