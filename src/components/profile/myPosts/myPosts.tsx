import React from 'react';
import style from './myPosts.module.css'
import {Post} from '../post/Post';

export const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            <div>My Posts</div>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <Post title={'Post_1'}
                  img={'https://s.pfst.net/2017.06/573451167567fc28a75b50a9ca9daa201354bffe9e1b_b.jpg'}/>
            <Post title={'Post_2'}
                  img={'https://s.pfst.net/2017.03/53828446756776707179e90c1242cec20a6230e240af_b.jpg'}/>
            <Post title={'Post_3'}
                  img={'https://s.pfst.net/2017.06/573307367567338c64d039da5900969936d2fa41d1d6_b.jpg'}/>
            <Post title={'Post_4'}
                  img={'https://st3.depositphotos.com/1007566/32952/v/450/depositphotos_329528562-stock-illustration-young-man-with-beard-and.jpg'}/>
            <Post title={'Post_5'}
                  img={'https://st4.depositphotos.com/34939642/39227/v/450/depositphotos_392278022-stock-illustration-vector-color-character-illustration.jpg'}/>
        </div>
    );
};