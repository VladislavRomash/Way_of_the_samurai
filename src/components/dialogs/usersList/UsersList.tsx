import React, {FC} from 'react';
import style from './UsersList.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    id: number
    name: string
    avatar: string
}

export const UsersList: FC<PropsType> = (props) => {

    const {id, name, avatar} = props

    return (
        <div className={style.userList}>
            <span>
                <img src={avatar} alt={'User_avatar'} className={style.avatar}/>
            </span>
            <span className={style.user}>
               <NavLink to={`/dialogs/${id}`}
                        activeClassName={style.activeLink}>{name}</NavLink>
           </span>

        </div>
    );
};