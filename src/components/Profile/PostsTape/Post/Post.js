import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {

    return(
        <div className={s.postBlock}>
            <div className={s.ava}>
                <img src="https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png" alt="user avatar" />
                <span className={s.likes}>Likes: {props.likes}</span>
            </div>
            <div className={s.post}>
                <p className={s.postText}>{props.post}</p>
            </div>
        </div>
    )
}

export default Post;