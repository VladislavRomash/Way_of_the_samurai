import {PostsType, ProfileType} from '../store/store';

export type ActionProfileType = AddPostType | ChangeTitlePostType

export const profileReducer = (state: ProfileType, action: ActionProfileType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: state.posts.length + 1,
                img: 'https://media.istockphoto.com/id/1300845620/ru/векторная/пользователь-icon-flat-изолирован-на-белом-фоне-символ-пользователя-иллюстрация-вектора.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=',
                title: state.newTitlePost,
                likeCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'CHANGE-TITLE-POST':
            return {...state, newTitlePost: action.title}
        default:
            return state
    }
}

export type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({
    type: 'ADD-POST'
} as const)

export type ChangeTitlePostType = ReturnType<typeof changeTitlePostAC>
export const changeTitlePostAC = (title: string) => ({
    type: 'CHANGE-TITLE-POST', title
} as const)