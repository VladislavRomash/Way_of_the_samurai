import React from 'react';
import style from './Post.module.css'

type PropsType = {
    title: string
    img: string
    likeCount: number
}

export const Post = (props: PropsType) => {

    const {title, img, likeCount} = props

    return (
        <div className={style.item}>
            <div>
                <img src={img} alt="avatar_post"/>
            </div>
            <div>{title}</div>
            <div>like - {likeCount}</div>
        </div>
    );
};