import React from 'react';
import s from './PostsTape.module.css';
import Post from './Post/Post';
//import PostForm from './PostForm';
import { Field, reduxForm } from 'redux-form';

let PostForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <Field name="post" component="input" type="textarea" placeholder=" create your new post" autoFocus />
        <button type="submit">Add post</button>
    </form>
}

PostForm = reduxForm({ form: 'post' })(PostForm);

const PostsTape = props => {
    let onSubmit = postText => {
        props.changePost(postText.post);
        props.addPost();     
    }
/*     const onAddPost = () => {
        props.addPost();
    } */

/*     const changePostText = (event) => {
        let changedText = event.target.value;
        props.changePostText(changedText);
    }    */ 

    return <>
            <div className={s.addPost}>
                <PostForm onSubmit={onSubmit} />
            </div>

            {props.posts.map(post => {
                return <Post key={post.id} post={post.postText} likes={post.likesCount} />
            })}
    </>  
}

export default PostsTape;



/* import React from 'react';
import s from './PostsTape.module.css';
import Post from './Post/Post';

const PostsTape = (props) => {
    const onAddPost = () => {
        props.addPost();
    }

    const changePostText = (event) => {
        let changedText = event.target.value;
        props.changePostText(changedText);
    }    

    return <>
            <div className={s.addPost}>
                <textarea onChange={changePostText} value={props.writingPostText} placeholder=" create your new post" autoFocus />
                <button onClick={onAddPost}>Add post</button>
            </div>

            {props.posts.map(post => {
                return <Post key={post.id} post={post.postText} likes={post.likesCount} />
            })}
    </>  
}

export default PostsTape; */