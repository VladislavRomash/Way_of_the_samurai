import React, {FC} from 'react';
import {ActionDialogType, addMessageAC, changeTitleMessageAC, DialogType} from '../../reducers/dialogReducer';
import {Dialogs} from './Dialogs';

type PropsType = {
    state: DialogType
    dispatch: (action: ActionDialogType) => void
}

export const DialogsContainer: FC<PropsType> = (props) => {

    const {state, dispatch} = props

    const addMessage = (id: number) => {
        dispatch(addMessageAC(id))
    }

    const changeCurrentTitle = (title: string) => {
        dispatch(changeTitleMessageAC(title))
    }

    return <Dialogs users={state.users}
                    messages={state.messages}
                    currentValue={state.newTitleMessage}
                    addMessage={addMessage}
                    changeCurrentTitle={changeCurrentTitle}
    />
};