import React, {FC} from 'react';
import {MyPosts} from './myPosts/myPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionProfileType, ProfileType} from '../../reducers/profileReducer';

type PropsType = {
    state: ProfileType
    dispatch: (action: ActionProfileType) => void
}

export const Profile: FC<PropsType> = (props) => {

    const {state, dispatch} = props

    return (
        <div>
            <ProfileInfo description={state.description}/>
            <MyPosts posts={state.posts}
                     newTitlePost={state.newTitlePost}
                     dispatch={dispatch}
            />
        </div>
    );
};