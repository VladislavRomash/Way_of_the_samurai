import {connect} from 'react-redux';
import {ProfileInfo} from './ProfileInfo';
import {RootType} from '../../../store/storeRedux';

const mapStateToProps = (state: RootType) => {
    return {
        description: state.profilePage.description
    }
}

export const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)