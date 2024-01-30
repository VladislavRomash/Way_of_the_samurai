import React from 'react';
import {addPostAC, changeTitlePostAC} from '../../../reducers/profileReducer';
import {MyPosts} from './MyPosts';
import {MyContext} from '../../../context/MyProvider';


export const MyPostsContainer = () => {

    return <MyContext.Consumer>
        {
            (store) => {

                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const changeCurrentTitle = (title: string) => {
                    store.dispatch(changeTitlePostAC(title))
                }
                return <MyPosts posts={state.profilePage.posts}
                                title={state.profilePage.newTitlePost}
                                addPost={addPost}
                                changeCurrentTitle={changeCurrentTitle}/>
            }
        }
    </MyContext.Consumer>


};