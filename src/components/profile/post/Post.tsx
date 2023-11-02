import React from 'react';
import style from './Post.module.css'

type PropsType = {
    title: string
    img: string
}

export const Post = (props: PropsType) => {

    const {title, img} = props

    return (
        <div className={style.item}>
            <div>
                <img src={img} alt="avatar_post"/>
            </div>
            <div>{title}</div>
        </div>
    );
};