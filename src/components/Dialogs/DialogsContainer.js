import { addMessage, changeMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {

    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        writingMessageText: state.dialogsPage.writingMessageText,
        /* isAuth: state.auth.isAuth */
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, changeMessage})(Dialogs);

export default DialogsContainer;