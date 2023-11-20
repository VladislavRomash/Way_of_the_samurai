import React, {FC} from 'react';
import style from './UsersList.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    id: number
    name: string
}

export const UsersList: FC<PropsType> = (props) => {

    const {id, name} = props

    return (
        <div className={style.user}>
            <NavLink to={`/dialogs/${id}`}
                     activeClassName={style.activeLink}>{name}</NavLink>
        </div>
    );
};