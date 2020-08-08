import React from 'react';
import s from'./Post.module.css';
import userAvatarPlaceholder from '../../../../img/user_avatar_placeholder.png';

const Post = (props) => {

    return <div className={s.postBlock}>
            <div className={s.ava}>
                <img src={userAvatarPlaceholder} alt="user avatar" />
                <span className={s.likes}>Likes: {props.likes}</span>
            </div>
            <div className={s.post}>
                <p className={s.postText}>{props.post}</p>
            </div>
    </div>
}

export default Post;