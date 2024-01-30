import {combineReducers, createStore} from 'redux';
import {profileReducer} from '../reducers/profileReducer';
import {dialogReducer} from '../reducers/dialogReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})

export type RootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)