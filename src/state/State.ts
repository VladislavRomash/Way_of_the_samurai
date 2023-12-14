import {reRenderFoo} from '../render/ReRenderFoo';

export type StateType = {
    dialogPage: DialogType
    profilePage: ProfileType
}
export type DialogType = {
    users: UserType[]
    messages: MessagesType[]
}
export type ProfileType = {
    posts: PostsType[]
    description: DescriptionType[]
    newTitlePost: string
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


export const state: StateType = {
    dialogPage: {
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
    },
    profilePage: {
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
}

export const addPost = () => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        img: '',
        title: state.profilePage.newTitlePost,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderFoo(state)
}

export const changeNewTitlePost = (title: string) => {
    state.profilePage.newTitlePost = title
    reRenderFoo(state)
}