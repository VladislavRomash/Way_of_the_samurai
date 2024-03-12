import {connect} from 'react-redux';
import {FindUsers} from './FindUsers';
import {RootType} from '../../store/storeRedux';
import {changeSubscribeStatus, getUsers} from '../../reducers/findUsersReducer';
import {UsersApi} from '../../api/apiType';

const mapStateToProps = (state: RootType) => {
    return {
        users: state.findUsers.users,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changingStatusSub: (id: number) => {
            dispatch(changeSubscribeStatus(id))
        },
        gerDataUsers: (users: UsersApi[]) => {
            dispatch(getUsers(users))
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)