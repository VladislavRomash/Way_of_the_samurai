import {DialogType} from '../store/store';
import {addMessageAC, changeTitleMessageAC, dialogReducer} from './dialogReducer';

let state: DialogType

beforeEach(() => {
    state = {
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
        newTitleMessage: 'My name is Vlad'
    }
})

test('message should be added', () => {
    const result = dialogReducer(state, addMessageAC(1))
    expect(result.messages[0].title).toBe('Hello / My name is Vlad')

})
test('value of input should be change in  newTitlePost', () => {
    const result = dialogReducer(state, changeTitleMessageAC('new title'))
    expect(result.newTitleMessage).toBe('new title')
})

