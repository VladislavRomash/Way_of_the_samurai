import {FC} from 'react';
import style from './FindUsers.module.css';
import defaultUsersPhoto from './img/User.png'
import {UsersApi} from '../../api/apiType';
import PaginationContainer from '../pagination/PaginationContainer';

interface Props {
    users: UsersApi[]
    changingStatusSub: (id: number) => void
}

export const FindUsers: FC<Props> = ({users, changingStatusSub}) => {
    return (
        <div className={style.findUsers}>

            {
                users.map(m => {
                    return (
                        <div key={m.id}
                             className={style.user}>

                            <div className={style.imgAndButton}>
                                <img src={m.photos.small ? m.photos.small : defaultUsersPhoto}
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
            <PaginationContainer/>
        </div>
    )
}