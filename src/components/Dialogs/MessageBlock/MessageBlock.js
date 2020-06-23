import React from 'react';
import s from '../Dialogs.module.css';

const MessageBlock = (props) => {

    return(
        <div className={s.message}>
            <img className={s.ava} src="https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png" alt="ava" />
            <div className={s.messageBlock}>
                <h5 className={s.userName}>{props.autor}</h5>
                <p className={s.messageText}>{props.message}</p>
            </div>
        </div>
    )
}

export default MessageBlock;