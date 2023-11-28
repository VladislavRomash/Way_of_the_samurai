import React, {FC} from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';
import {PostsType} from '../../../index';

type PropsType = {
    posts: PostsType[]
}

export const MyPosts: FC<PropsType> = (props) => {

    const {posts} = props

    return (
        <div className={style.myPostsBlock}>

            <h2>My Posts</h2>

            <div>
                <input type="text"/>
                <button>+</button>
            </div>

            <div className={style.myPosts}>
                {
                    posts.map(m => <Post key={m.id}
                                         title={m.title}
                                         img={m.img}
                                         likeCount={m.like}/>
                    )
                }
            </div>
        </div>
    );
};