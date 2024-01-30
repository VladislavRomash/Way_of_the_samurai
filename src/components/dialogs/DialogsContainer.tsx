import {addMessageAC, changeTitleMessageAC} from '../../reducers/dialogReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootType} from '../../store/storeRedux';

const mapStateToProps = (state: RootType) => {
    return {
        users: state.dialogPage.users,
        messages: state.dialogPage.messages,
        currentValue: state.dialogPage.newTitleMessage
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        addMessage: (id: number) => {
            dispatch(addMessageAC(id))
        },
        changeCurrentTitle: (title: string) => {
            dispatch(changeTitleMessageAC(title))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)