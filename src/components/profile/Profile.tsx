import React, {FC} from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileType} from '../../reducers/profileReducer';

type PropsType = {
    profilePage: ProfileType
    addPost: () => void
    changeCurrentTitle: (title: string) => void
}

export const Profile: FC<PropsType> = ({profilePage, addPost, changeCurrentTitle}) => {

    const {posts, description, newTitlePost} = profilePage

    return (
        <div>
            <ProfileInfo description={description}/>
            <MyPosts posts={posts}
                     title={newTitlePost}
                     addPost={addPost}
                     changeCurrentTitle={changeCurrentTitle}/>
        </div>
    );
};