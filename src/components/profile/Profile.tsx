import React from 'react';
import style from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={style.content}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg"
                alt=""/>
            <div>ava+description</div>
            <div>My posts</div>
            <div> New post</div>
            <div>post_1</div>
            <div>post_2</div>
        </div>
    );
};