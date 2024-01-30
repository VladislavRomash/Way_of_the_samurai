import React, {FC} from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionProfileType, ProfileType} from '../../reducers/profileReducer';
import {MyPostsContainer} from './myPosts/MyPostsContainer'

type PropsType = {
    state: ProfileType
    dispatch: (action: ActionProfileType) => void
}

export const Profile: FC<PropsType> = (props) => {

    const {state, dispatch} = props

    return (
        <div>
            <ProfileInfo description={state.description}/>
            <MyPostsContainer posts={state.posts}
                              title={state.newTitlePost}
                              dispatch={dispatch}/>
        </div>
    );
};