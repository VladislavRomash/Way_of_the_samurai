import {UsersApi} from '../api/apiType';

export interface FindUsersPage {
    users: UsersApi[]
    portion: number
    totalUsers: number
    currentPage: number
}

const initialState = {
    users: [],
    portion: 5,
    totalUsers: 0,
    currentPage: 45
}

type Action = ChangeSubscribeStatus
    | GetUsers
    | SetCurrentPage
    | SetTotalUsers

export const findUsersReducer = (state: FindUsersPage = initialState, action: Action): FindUsersPage => {
    switch (action.type) {
        case 'CHANGE_SUBSCRIBE':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: !m.followed} : m)}
        case 'GET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS':
            return {...state, totalUsers: action.totalUsers}
        default:
            return state
    }
}

type ChangeSubscribeStatus = ReturnType<typeof changeSubscribeStatus>
export const changeSubscribeStatus = (id: number) => {
    return {type: 'CHANGE_SUBSCRIBE', id} as const
}

type GetUsers = ReturnType<typeof getUsers>
export const getUsers = (users: UsersApi[]) => {
    return {type: 'GET_USERS', users} as const
}

type SetCurrentPage = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', currentPage} as const
}

type SetTotalUsers = ReturnType<typeof setTotalUsers>
export const setTotalUsers = (totalUsers: number) => {
    return {type: 'SET_TOTAL_USERS', totalUsers} as const
}

