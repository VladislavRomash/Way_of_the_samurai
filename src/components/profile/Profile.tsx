import React, {FC} from 'react';
import {MyPostsContainer} from './myPosts/MyPostsContainer'
import {ProfileInfoContainer} from './profileInfo/ProfileInfoContainer';

type PropsType = {}

export const Profile: FC<PropsType> = () => {

    return (
        <div>
            <ProfileInfoContainer/>
            <MyPostsContainer/>
        </div>
    );
};