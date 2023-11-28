import React, {FC} from 'react';
import style from './Dialogs.module.css'
import {UsersList} from './usersList/UsersList';
import {Message} from './message/Message';
import {UserType} from '../../index';

type PropsType = {
    users: UserType[]
}

export const Dialogs: FC<PropsType> = (props) => {

    const {users} = props

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {
                    users.map(m => <UsersList key={m.id}
                                              id={m.id}
                                              name={m.name}/>
                    )
                }

            </div>

            <div className={style.messagesItems}>
                {
                    users.map(m => <Message key={m.id}
                                            id={m.id}
                                            title={m.message}/>
                    )
                }
            </div>

        </div>
    );
};