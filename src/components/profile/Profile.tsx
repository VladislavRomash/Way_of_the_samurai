import React, {FC} from 'react';
import {MyPosts} from './myPosts/myPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfileType} from '../../state/State';

type PropsType = {
    state: ProfileType
}

export const Profile: FC<PropsType> = (props) => {

    const {state} = props

    return (
        <div>
            <ProfileInfo description={state.description}/>
            <MyPosts posts={state.posts}/>
        </div>
    );
};