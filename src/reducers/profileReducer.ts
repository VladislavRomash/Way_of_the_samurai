export type ProfileType = {
    posts: PostsType[]
    description: DescriptionType[]
    newTitlePost: string
}
export type PostsType = {
    id: number
    img: string
    title: string
    likeCount: number
}
export type DescriptionType = {
    avatar: string
    characteristic: string
}

export type ActionProfileType = AddPostType | ChangeTitlePostType

const initialState: ProfileType = {
    description: [
        {
            avatar: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg',
            characteristic: 'Hello, my name is Vlad. I am learning javascript and this is one of my first projects'
        }
    ],
    posts: [
        {
            id: 1,
            img: 'https://s.pfst.net/2017.06/573451167567fc28a75b50a9ca9daa201354bffe9e1b_b.jpg',
            title: 'Post_1',
            likeCount: 15
        },
        {
            id: 2,
            img: 'https://s.pfst.net/2017.03/53828446756776707179e90c1242cec20a6230e240af_b.jpg',
            title: 'Post_2',
            likeCount: 35
        },
        {
            id: 3,
            img: 'https://s.pfst.net/2017.06/573307367567338c64d039da5900969936d2fa41d1d6_b.jpg',
            title: 'Post_3',
            likeCount: 5
        },
    ],
    newTitlePost: '',
}

export const profileReducer = (state = initialState, action: ActionProfileType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: state.posts.length + 1,
                img: 'https://media.istockphoto.com/id/1300845620/ru/векторная/пользователь-icon-flat-изолирован-на-белом-фоне-символ-пользователя-иллюстрация-вектора.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=',
                title: state.newTitlePost,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newTitlePost: ''}
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