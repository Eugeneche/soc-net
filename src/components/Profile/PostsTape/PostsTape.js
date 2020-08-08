import React from 'react';
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

export default PostsTape;