import {createContext, FC, ReactNode} from 'react';
import {store} from '../store/storeRedux';
import {EmptyObject, Store} from 'redux';
import {ActionProfileType, ProfileType} from '../reducers/profileReducer';
import {ActionDialogType, DialogType} from '../reducers/dialogReducer';

export const MyContext = createContext(store)

type PropsType = {
    store: Store<EmptyObject & {
        profilePage: ProfileType;
        dialogPage: DialogType;
    }, ActionProfileType | ActionDialogType>
    children: ReactNode
}

// export const MyProvider: FC<PropsType> = (props) => {
//
//     const {store, children} = props
//
//     return <MyContext.Provider value={store}>
//         {children}
//     </MyContext.Provider>
// }