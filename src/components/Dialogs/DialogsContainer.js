import React from 'react';
import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => { 

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
}

export default DialogsContainer;