import {Component} from 'react';
import style from './FindUsers.module.css';
import defaultUsersPhoto from './img/User.png'
import {UsersApi} from '../../api/apiType';
import {users_api} from '../../api/users_api';

interface Props {
    users: UsersApi[]
    changingStatusSub: (id: number) => void
    gerDataUsers: (users: UsersApi[]) => void
    currentPage: number
    changeCurrentPage: (currentPage: number) => void
    totalUsers: number
    changeTotalUsers: (totalUsers: number) => void
    portion: number
}

class FindUsers extends Component<Props> {
    componentDidMount() {
        users_api.getUsers(this.props.currentPage, this.props.portion)
            .then(response => {
                this.props.gerDataUsers(response.items)
                this.props.changeTotalUsers(response.totalCount)
            })
    }

    onClickHandler = (currentPage: number) => {
        this.props.changeCurrentPage(currentPage)
        users_api.getUsers(currentPage, this.props.portion)
            .then(response => {
                this.props.gerDataUsers(response.items)
                this.props.changeTotalUsers(response.totalCount)
            })
    }

    render() {

        const {users, changingStatusSub, currentPage, portion, totalUsers} = this.props

        const pagesCount = []

        for (let i = 1; i <= Math.ceil(totalUsers / portion); i++) {
            pagesCount.push(i)
        }

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

                <div>
                    {
                        pagesCount.map(m => <span key={m}
                                                  className={m === currentPage ? style.currentPage : ''}
                                                  onClick={() => this.onClickHandler(m)}>{m} </span>)
                    }
                </div>

            </div>
        );
    }
}

export default FindUsers