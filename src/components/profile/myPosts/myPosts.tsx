import React, {FC, useRef} from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';
import {PostsType} from '../../../state/State';

type PropsType = {
    posts: PostsType[]
    addPost: () => void
    newTitlePost: string
    changeNewTitlePost: (title: string) => void
}

export const MyPosts: FC<PropsType> = (props) => {

    const {posts, addPost, newTitlePost, changeNewTitlePost} = props

    const mappedPost = posts.map(m => <Post key={m.id}
                                            title={m.title}
                                            img={m.img}
                                            likeCount={m.likeCount}/>
    )

    const ref = useRef<null | HTMLInputElement>(null)

    const onClickHandler = () => {
        addPost()
        changeNewTitlePost('')
    }

    const onChangeHandler = () => {
        changeNewTitlePost(ref.current ? ref.current.value : '')
    }

    return (
        <div className={style.myPostsBlock}>

            <h2>My Posts</h2>
            <div>
                <input type="text"
                       ref={ref}
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