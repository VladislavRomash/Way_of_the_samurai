import React from 'react';
import {addMessageAC, changeTitleMessageAC} from '../../reducers/dialogReducer';
import {Dialogs} from './Dialogs';
import {MyContext} from '../../context/MyProvider';

export const DialogsContainer = () => {

    return <MyContext.Consumer>
        {
            (store) => {

                const state = store.getState()

                const addMessage = (id: number) => {
                    store.dispatch(addMessageAC(id))
                }

                const changeCurrentTitle = (title: string) => {
                    store.dispatch(changeTitleMessageAC(title))
                }

                return <Dialogs users={state.dialogPage.users}
                                messages={state.dialogPage.messages}
                                currentValue={state.dialogPage.newTitleMessage}
                                addMessage={addMessage}
                                changeCurrentTitle={changeCurrentTitle}
                />
            }
        }
    </MyContext.Consumer>
};