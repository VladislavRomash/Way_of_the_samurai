import {connect} from 'react-redux';
import {RootType} from '../../store/storeRedux';
import {changeSubscribeStatus, getUsers, setTotalUsers} from '../../reducers/findUsersReducer';
import {UsersApi} from '../../api/apiType';
import {Component} from 'react';
import {users_api} from '../../api/users_api';
import {FindUsers} from './FindUsers';

interface Props {
    users: UsersApi[]
    currentPage: number
    portion: number
    changingStatusSub: (id: number) => void
    getDataUsers: (users: UsersApi[]) => void
    changeTotalUsers: (totalUsers: number) => void

}

class FindUsersContainer extends Component<Props> {
    componentDidMount() {
        users_api.getUsers(this.props.currentPage, this.props.portion)
            .then(response => {
                this.props.getDataUsers(response.items)
                this.props.changeTotalUsers(response.totalCount)
            })
    }

    render() {
        return <FindUsers users={this.props.users} changingStatusSub={this.props.changingStatusSub}/>
    }
}

const mapStateToProps = (state: RootType) => {
    return {
        users: state.findUsers.users,
        currentPage: state.findUsers.currentPage,
        portion: state.findUsers.portion,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changingStatusSub: (id: number) => {
            dispatch(changeSubscribeStatus(id))
        },
        getDataUsers: (users: UsersApi[]) => {
            dispatch(getUsers(users))
        },
        changeTotalUsers: (totalUsers: number) => {
            dispatch(setTotalUsers(totalUsers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer)