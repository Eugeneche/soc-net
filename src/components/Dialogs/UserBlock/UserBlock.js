import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const UserBlock = (props) =>{

    return(
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
            <div className={s.userBlock}>
                <img className={s.ava} src="https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png" alt="ava" />
                {props.name}
            </div>
        </NavLink>
    )
}

export default UserBlock;