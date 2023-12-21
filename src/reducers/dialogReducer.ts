import {DialogType} from '../store/store';

export type ActionDialogType = AddMessageType | ChangeTitleMessageType
export const dialogReducer = (state: DialogType, action: ActionDialogType): DialogType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: state.messages.map(m => m.id === action.id ? {
                    ...m,
                    title: `${m.title} / ${state.newTitleMessage}`
                } : m), newTitleMessage: ''
            }
        case 'CHANGE-TITLE-MESSAGE':
            return {...state, newTitleMessage: action.title}
        default:
            return state
    }
}


export type AddMessageType = ReturnType<typeof addMessageAC>
export const addMessageAC = (id: number) => ({
    type: 'ADD-MESSAGE', id
} as const)

export type ChangeTitleMessageType = ReturnType<typeof changeTitleMessageAC>
export const changeTitleMessageAC = (title: string) => ({
    type: 'CHANGE-TITLE-MESSAGE', title
} as const)