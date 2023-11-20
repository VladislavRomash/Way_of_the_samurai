import React from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';

type PostType = {
    id: number
    img: string
    title: string
    like: number
}

export const MyPosts = () => {

    const post: PostType[] = [
        {
            id: 1,
            img: 'https://s.pfst.net/2017.06/573451167567fc28a75b50a9ca9daa201354bffe9e1b_b.jpg',
            title: 'Post_1',
            like: 15
        },
        {
            id: 2,
            img: 'https://s.pfst.net/2017.03/53828446756776707179e90c1242cec20a6230e240af_b.jpg',
            title: 'Post_2',
            like: 35
        },
        {
            id: 3,
            img: 'https://s.pfst.net/2017.06/573307367567338c64d039da5900969936d2fa41d1d6_b.jpg',
            title: 'Post_3',
            like: 5
        },
    ]

    return (
        <div className={style.myPostsBlock}>

            <h2>My Posts</h2>

            <div>
                <input type="text"/>
                <button>+</button>
            </div>

            <div className={style.myPosts}>
                {
                    post.map(m => {
                        return (
                            <Post key={m.id} title={m.title} img={m.img} likeCount={m.like}/>
                        )
                    })
                }
            </div>
        </div>
    );
};