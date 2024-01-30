import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {addPostAC, changeTitlePostAC} from '../../../reducers/profileReducer';
import {RootType} from '../../../store/storeRedux';

const mapStateToProps = (state: RootType) => {
    return {
        posts: state.profilePage.posts,
        title: state.profilePage.newTitlePost
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeCurrentTitle: (title: string) => {
            dispatch(changeTitlePostAC(title))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)