import React, {FC} from 'react';
import {ActionProfileType, addPostAC, changeTitlePostAC, PostsType} from '../../../reducers/profileReducer';
import {MyPosts} from './MyPosts';

type PropsType = {
    posts: PostsType[]
    title: string
    dispatch: (action: ActionProfileType) => void
}

export const MyPostsContainer: FC<PropsType> = (props) => {

    const {posts, title, dispatch} = props

    const addPost = () => {
        dispatch(addPostAC())
    }

    const changeCurrentTitle = (title: string) => {
        dispatch(changeTitlePostAC(title))
    }

    return <MyPosts posts={posts}
                    title={title}
                    addPost={addPost}
                    changeCurrentTitle={changeCurrentTitle}/>
};