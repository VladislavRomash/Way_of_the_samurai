import {connect} from 'react-redux';
import {FindUsers} from './FindUsers';
import {RootType} from '../../store/storeRedux';
import {AllUserFind, changeSubscribeStatus, getUsers} from '../../reducers/findUsersReducer';

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
        gerDataUsers: (users: AllUserFind[]) => {
            dispatch(getUsers(users))
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)