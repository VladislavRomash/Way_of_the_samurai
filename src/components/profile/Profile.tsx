import React from 'react';
import {MyPosts} from './myPosts/myPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';

export type PostsType = {
    id: number
    img: string
    title: string
    like: number
}

export const Profile = () => {

    const posts: PostsType[] = [
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
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};