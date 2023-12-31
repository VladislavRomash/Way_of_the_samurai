import React, {ChangeEvent, FC} from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';
import {PostsType} from '../../../store/store';
import {ActionProfileType, addPostAC, changeTitlePostAC} from '../../../reducers/profileReducer';

type PropsType = {
    posts: PostsType[]
    newTitlePost: string
    dispatch: (action: ActionProfileType) => void
}

export const MyPosts: FC<PropsType> = (props) => {

    const {posts, newTitlePost, dispatch} = props

    const mappedPost = posts.map(m => <Post key={m.id}
                                            title={m.title}
                                            img={m.img}
                                            likeCount={m.likeCount}/>
    )

    const onClickHandler = () => {
        dispatch(addPostAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTitlePostAC(e.currentTarget.value))
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