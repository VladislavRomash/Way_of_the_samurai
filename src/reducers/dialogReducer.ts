export type DialogType = {
    users: UserType[]
    messages: MessagesType[]
    newTitleMessage: string
}
export type UserType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: number
    title: string
}

export type ActionDialogType = AddMessageType | ChangeTitleMessageType

const initialState: DialogType = {
    users: [
        {
            id: 1,
            name: 'Ann',
            avatar: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-male-avatar-simple-cartoon-design-png-image_5230556.jpg'
        },
        {
            id: 2,
            name: 'Max',
            avatar: 'https://img.freepik.com/premium-vector/man-profiel-cartoon_18591-58483.jpg?w=2000'
        },
        {
            id: 3,
            name: 'Dima',
            avatar: 'https://img.freepik.com/premium-vector/man-profiel-cartoon_18591-58482.jpg?w=360'
        },
    ],
    messages: [
        {id: 1, title: 'Hello'},
        {id: 2, title: 'How are you?'},
        {id: 3, title: 'Yo'},
    ],
    newTitleMessage: ''
}
export const dialogReducer = (state = initialState, action: ActionDialogType): DialogType => {
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