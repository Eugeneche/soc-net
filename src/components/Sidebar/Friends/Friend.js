import React, { Fragment } from 'react';
import s from './Friend.module.css';


const Friend = (props) => {


    return(
        <Fragment>
            <img className={s.ava} src={props.avatarLink} alt={`${props.name}'s avatar`} />
            <span className={s.friendName}>{props.name}</span>
        </Fragment>
    )
}

export default Friend;