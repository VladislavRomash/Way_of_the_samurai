export interface AllUserFind {
    id: number,
    avatar: string
    followed: boolean
    name: string
    location: {
        country: string
        city: string
    }
    about: string
}

export interface FindUsersPage {
    users: AllUserFind[]
}

const initialState = {
    users: []
}

type Action = ChangeSubscribeStatus | GetUsers

export const findUsersReducer = (state: FindUsersPage = initialState, action: Action): FindUsersPage => {
    switch (action.type) {
        case 'CHANGE_SUBSCRIBE':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: !m.followed} : m)}
        case 'GET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

type ChangeSubscribeStatus = ReturnType<typeof changeSubscribeStatus>
export const changeSubscribeStatus = (id: number) => {
    return {type: 'CHANGE_SUBSCRIBE', id} as const
}

type GetUsers = ReturnType<typeof getUsers>
export const getUsers = (users: AllUserFind[]) => {
    return {type: 'GET_USERS', users} as const
}