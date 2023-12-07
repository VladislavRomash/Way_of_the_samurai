import React, {FC} from 'react';
import {MyPosts} from './myPosts/myPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ProfileType} from '../../state/State';

type PropsType = {
    state: ProfileType
    addPost: (title: string) => void
}

export const Profile: FC<PropsType> = (props) => {

    const {state, addPost} = props

    return (
        <div>
            <ProfileInfo description={state.description}/>
            <MyPosts posts={state.posts}
                     addPost={addPost}/>
        </div>
    );
};