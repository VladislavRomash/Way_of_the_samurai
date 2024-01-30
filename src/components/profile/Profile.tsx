import React, {FC} from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfileType} from '../../reducers/profileReducer';
import {MyPostsContainer} from './myPosts/MyPostsContainer'

type PropsType = {
    state: ProfileType
}

export const Profile: FC<PropsType> = (props) => {

    const {state} = props

    return (
        <div>
            <ProfileInfo description={state.description}/>
            <MyPostsContainer/>
        </div>
    );
};