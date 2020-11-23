import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Dialogs.module.css';

let MessageForm = props => {

    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} >
        <div>
          <Field 
            name="messageText" 
            component="textarea" 
            type="text"
            placeholder=" write your message here"
            className={styles.postField} 
            autoFocus 
          />
        </div>
        <button type="submit">Send message</button>
    </form>
}

MessageForm = reduxForm({ form: 'message' })(MessageForm);

export default MessageForm;