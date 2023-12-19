import React, {ChangeEvent, FC} from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';
import {ActionType, PostsType} from '../../../store/store';

type PropsType = {
    posts: PostsType[]
    newTitlePost: string
    dispatch: (action: ActionType) => void
}

export type AddPostType = {
    type: 'ADD-POST'
}

export type ChangeTitleType = {
    type: 'CHANGE-TITLE'
    title: string
}

export const MyPosts: FC<PropsType> = (props) => {

    const {posts, newTitlePost, dispatch} = props

    const mappedPost = posts.map(m => <Post key={m.id}
                                            title={m.title}
                                            img={m.img}
                                            likeCount={m.likeCount}/>
    )

    const onClickHandler = () => {
        const action: AddPostType = {type: 'ADD-POST'}
        dispatch(action)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const action: ChangeTitleType = {type: 'CHANGE-TITLE', title: e.currentTarget.value}
        dispatch(action)
    }

    return (
        <div className={style.myPostsBlock}>

            <h2>My Posts</h2>
            <div>
                <input type="text"
                       value={newTitlePost}
                       onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>+</button>
            </div>

            <div className={style.myPosts}>
                {mappedPost}
            </div>
        </div>
    );
};