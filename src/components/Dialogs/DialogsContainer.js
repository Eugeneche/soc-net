import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


/* const DialogsContainer = (props) => { 

    return( 
        <StoreContext.Consumer>
            { (store) => {
                 let state = store.getState();

                 let addMessage = () => {        
                    store.dispatch(addMessageActionCreator());
                }
            
                const changeMessage = (text) => {
                    store.dispatch(changeMessageActionCreator(text));
                }

                return(
                    <Dialogs addMessage={addMessage} changeMessage={changeMessage} users={state.dialogsPage.users} messages={state.dialogsPage.messages} writingMessageText={state.dialogsPage.writingMessageText} />
                    )
                }
            }
        </StoreContext.Consumer>
        )
} */

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