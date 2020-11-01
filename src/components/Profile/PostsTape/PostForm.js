import React from 'react';
import { Field, reduxForm } from 'redux-form';

let PostForm = props => {
    console.log('rere');
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <Field name="post" component="input" type="textarea" placeholder=" create your new post" autoFocus />
        <button type="submit">Add post</button>
    </form>
}

PostForm = reduxForm({ form: 'post' })(PostForm);

export default PostForm;