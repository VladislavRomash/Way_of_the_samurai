import {connect} from 'react-redux';
import {Profile} from './Profile';
import {RootType} from '../../store/storeRedux';
import {addPostAC, changeTitlePostAC} from '../../reducers/profileReducer';

const mapStateToProps = (state: RootType) => {
    return {
        profilePage: state.profilePage
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

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)