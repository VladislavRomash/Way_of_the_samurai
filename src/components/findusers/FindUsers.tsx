import React, {useEffect} from 'react';
import {AllUserFind} from '../../reducers/findUsersReducer';
import style from './FindUsers.module.css'

interface Props {
    users: AllUserFind[]
    changingStatusSub: (id: number) => void
    gerDataUsers: (users: AllUserFind[]) => void
}

const usersData = [
    {
        id: 1,
        avatar: 'https://www.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600nw-1682415103.jpg',
        followed: true,
        name: 'Igor V.',
        location: {country: 'Belarus', city: 'Minsk'},
        about: 'I am looking for a Job right now...'
    },
    {
        id: 2,
        avatar: 'https://www.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600nw-1682415103.jpg',
        followed: false,
        name: 'Sveta B.',
        location: {country: 'Ukraine', city: 'Kiev'},
        about: 'I am pretty!'
    }
]

export const FindUsers = ({users, changingStatusSub, gerDataUsers}: Props) => {

    useEffect(() => {
        gerDataUsers(usersData)
    }, []);

    return (
        <div className={style.findUsers}>
            {
                users.map(m => {
                    return (
                        <div key={m.id}
                             className={style.user}>

                            <div className={style.imgAndButton}>
                                <img src={m.avatar}
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
                                    <div>{m.about}</div>
                                </div>

                                <div className={style.descriptionLocation}>
                                    <div>{m.location.country}</div>
                                    <div>{m.location.city}</div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};