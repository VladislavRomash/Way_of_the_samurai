import React, {FC} from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';
import {PostsType} from '../Profile';

type PropsType = {
    posts: PostsType[]
}

export const MyPosts: FC<PropsType> = (props) => {

    const {posts} = props


    const myPostElement = posts.map(m => <Post key={m.id}
                                               title={m.title}
                                               img={m.img}
                                               likeCount={m.like}/>
    )

    return (
        <div className={style.myPostsBlock}>

            <h2>My Posts</h2>

            <div>
                <input type="text"/>
                <button>+</button>
            </div>

            <div className={style.myPosts}>
                {myPostElement}
            </div>
        </div>
    );
};