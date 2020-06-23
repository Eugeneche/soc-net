import React from 'react';
import s from './Dialogs.module.css';
import UserBlock from './UserBlock/UserBlock';
import MessageBlock from './MessageBlock/MessageBlock';


const Dialogs = (props) => { 

    const onAddMessage = () => {        
        props.addMessage();
    }

    const onChangeMessage = (event) => {
        let writingText = event.target.value;
        props.changeMessage(writingText);
    }

    return(
        <div className={s.dialogs}>
            <div className={s.usersColumn}>

                {props.users.map(user => <UserBlock key={user.id} id={user.id} name={user.name} />)}

            </div>
            <div className={s.messagesColumn}>
                <div className={s.addMessage}>
                    <textarea onChange={onChangeMessage} className={s.postField} value={props.writingMessageText} placeholder=" write your message here" />
                    <button onClick={onAddMessage}>Send message</button>
                </div>

                {props.messages.map(mes => <MessageBlock key={mes.id} autor={mes.autor} message={mes.message} />)}

            </div>
        </div>
    )
}

export default Dialogs;