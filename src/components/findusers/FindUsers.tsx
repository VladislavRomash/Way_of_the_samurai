import {Component} from 'react';
import style from './FindUsers.module.css';
import defaultUsersPhoto from './img/User.png'
import {UsersApi} from '../../api/apiType';
import {users_api} from '../../api/users_api';

interface Props {
    users: UsersApi[]
    changingStatusSub: (id: number) => void
    gerDataUsers: (users: UsersApi[]) => void
}

class FindUsers extends Component<Props> {
    componentDidMount() {
        users_api.getUsers()
            .then(response => this.props.gerDataUsers(response.items))
            .catch(error => console.warn(error))
    }

    render() {

        const {users, changingStatusSub} = this.props

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
    }
}

export default FindUsers