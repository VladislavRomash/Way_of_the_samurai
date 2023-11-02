import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './myPosts/myPosts';

export const Profile = () => {
    return (
        <div className={style.content}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg"
                alt=""/>
            <div>
                <img src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
                     alt="Avatar"
                     className={style.avatar}/>
            </div>
            <MyPosts/>
        </div>
    );
};