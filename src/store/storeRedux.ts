import {combineReducers, createStore} from 'redux';
import {profileReducer} from '../reducers/profileReducer';
import {dialogReducer} from '../reducers/dialogReducer';
import {findUsersReducer} from '../reducers/findUsersReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    findUsers: findUsersReducer
})

export type RootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)