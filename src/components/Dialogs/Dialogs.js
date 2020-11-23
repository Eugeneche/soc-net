import React, { Fragment } from 'react';
import s from './Dialogs.module.css';
import UserBlock from './UserBlock/UserBlock';
import MessageBlock from './MessageBlock/MessageBlock';
import MessageForm from './MessageForm';
//import { Redirect } from 'react-router-dom';


const Dialogs = props => { 

    const submit = values => {
        props.changeMessage(values.messageText);
        props.addMessage();
        
        console.log(values);
      }

/*     const onAddMessage = () => {        
        props.addMessage();
    }

    const onChangeMessage = (event) => {
        let writingText = event.target.value;
        props.changeMessage(writingText);
    } */

    return <Fragment>
{/*         {!props.isAuth
            ? <Redirect to='/login' />
            
            : */} <div className={s.dialogs}>
                <div className={s.usersColumn}>

                    {props.users.map(user => <UserBlock key={user.id} id={user.id} name={user.name} />)}

                </div>
                <div className={s.messagesColumn}>
                    <div className={s.addMessage}>
                        <MessageForm onSubmit={submit} />

                        {/* <textarea onChange={onChangeMessage} className={s.postField} value={props.writingMessageText} autoFocus placeholder=" write your message here" />
                        <button onClick={onAddMessage}>Send message</button> */}
                    </div>

                    {props.messages.map(mes => <MessageBlock key={mes.id} autor={mes.autor} message={mes.message} />)}

                </div>
            </div>  
        {/* } */}

   </Fragment>
}

export default Dialogs;