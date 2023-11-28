import React, {FC} from 'react';
import {MyPosts} from './myPosts/myPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsType} from '../../index';

type PropsType = {
    posts: PostsType[]
}

export const Profile: FC<PropsType> = (props) => {

    const {posts} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};