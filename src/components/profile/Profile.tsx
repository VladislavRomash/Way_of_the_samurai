import React from 'react';
import {MyPosts} from './myPosts/myPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};