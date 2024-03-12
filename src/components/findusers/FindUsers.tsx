import React, {useEffect} from 'react';
import style from './FindUsers.module.css'
import {users_api} from '../../api/users_api';
import {UsersApi} from '../../api/apiType';
import defaultUsersPhoto from './img/User.png'

interface Props {
    users: UsersApi[]
    changingStatusSub: (id: number) => void
    gerDataUsers: (users: UsersApi[]) => void
}

export const FindUsers = ({users, changingStatusSub, gerDataUsers}: Props) => {

    useEffect(() => {
        users_api.getUsers()
            .then(response => gerDataUsers(response.items))
            .catch(error => console.warn(error))
    }, []);

    return (
        <div className={style.findUsers}>
            {
                users.map(m => {
                    return (
                        <div key={m.id}
                             className={style.user}>

                            <div className={style.imgAndButton}>
                                <img src={m.photos.small ? '' : defaultUsersPhoto}
                                     alt="avatar"
                                     className={style.img}/>
                                <button
                                    onClick={() => changingStatusSub(m.id)}>
                                    {m.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>

                            <div className={style.description}>

                                <div className={style.descriptionInfo}>
                                    <div>{m.name}</div>
                                    <div>{'m.about'}</div>
                                </div>

                                <div className={style.descriptionLocation}>
                                    <div>{'m.location.country'}</div>
                                    <div>{'m.location.city'}</div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};