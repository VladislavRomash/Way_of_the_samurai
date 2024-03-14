import {connect} from 'react-redux';
import {RootType} from '../../store/storeRedux';
import {getUsers, setCurrentPage} from '../../reducers/findUsersReducer';
import {UsersApi} from '../../api/apiType';
import {increaseSizeScale, reduceSizeScale} from './paginationReducer';
import React from 'react';
import {users_api} from '../../api/users_api';
import {Pagination} from './Pagination';

interface Props {
    portion: number
    totalUsers: number
    currentPage: number
    maxSizeScale: number
    minSizeScale: number
    getDataUsers: (users: UsersApi[]) => void
    changeCurrentPage: (currentPage: number) => void
    changeUpperSizeScale: (currentPage: number) => void
    changeLowerSizeScale: (currentPage: number) => void
}

class PaginationContainer extends React.Component<Props> {

    onClickHandler = (currentPage: number) => {
        users_api.getUsers(currentPage, this.props.portion)
            .then(response => {
                this.props.getDataUsers(response.items)
            })
        this.props.changeCurrentPage(currentPage)
        this.props.changeUpperSizeScale(currentPage)
        this.props.changeLowerSizeScale(currentPage)
    }

    render() {
        return <Pagination portion={this.props.portion}
                           totalUsers={this.props.totalUsers}
                           currentPage={this.props.currentPage}
                           maxSizeScale={this.props.maxSizeScale}
                           minSizeScale={this.props.minSizeScale}
                           onChangePage={this.onClickHandler}

        />
    }
}

const mapStateToProps = (state: RootType) => {
    return {
        portion: state.findUsers.portion,
        totalUsers: state.findUsers.totalUsers,
        currentPage: state.findUsers.currentPage,
        maxSizeScale: state.pagination.maxSizeScale,
        minSizeScale: state.pagination.minSizeScale
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        getDataUsers: (users: UsersApi[]) => {
            dispatch(getUsers(users))
        },
        changeCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        changeUpperSizeScale: (value: number) => {
            dispatch(increaseSizeScale(value))
        },
        changeLowerSizeScale: (value: number) => {
            dispatch(reduceSizeScale(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer)