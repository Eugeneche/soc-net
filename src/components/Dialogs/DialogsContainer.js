import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        writingMessageText: state.dialogsPage.writingMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {        
            dispatch(addMessageActionCreator());
        },
        changeMessage: (text) => {
            dispatch(changeMessageActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;