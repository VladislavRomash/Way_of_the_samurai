import {connect} from 'react-redux';
import {RootType} from '../../store/storeRedux';
import {changeSubscribeStatus, getUsers, setCurrentPage, setTotalUsers} from '../../reducers/findUsersReducer';
import {UsersApi} from '../../api/apiType';
import FindUsers from './FindUsers';


const mapStateToProps = (state: RootType) => {
    return {
        users: state.findUsers.users,
        currentPage: state.findUsers.currentPage,
        portion: state.findUsers.portion,
        totalUsers: state.findUsers.totalUsers
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changingStatusSub: (id: number) => {
            dispatch(changeSubscribeStatus(id))
        },
        gerDataUsers: (users: UsersApi[]) => {
            dispatch(getUsers(users))
        },
        changeCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        changeTotalUsers: (totalUsers: number) => {
            dispatch(setTotalUsers(totalUsers))
        },
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)