import React, {ChangeEvent, FC} from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';
import {PostsType} from '../../../reducers/profileReducer';

type PropsType = {
    posts: PostsType[]
    title: string
    addPost: () => void
    changeCurrentTitle: (title: string) => void
}

export const MyPosts: FC<PropsType> = (props) => {

    const {posts, title, addPost, changeCurrentTitle} = props

    const mappedPost = posts.map(m => <Post key={m.id}
                                            title={m.title}
                                            img={m.img}
                                            likeCount={m.likeCount}/>
    )

    const onClickHandler = () => {
        addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeCurrentTitle(e.currentTarget.value)
    }

    return (
        <div className={style.myPostsBlock}>

            <h2>My Posts</h2>
            <div>
                <input type="text"
                       value={title}
                       onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>+</button>
            </div>

            <div className={style.myPosts}>
                {mappedPost}
            </div>
        </div>
    );
};