import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';
import authUserAvatarPlaceholder from '../../img/user_avatar.png';


const MainHeader = (props) => {

    return <div className={styles.mineHeader}>
        <div className={styles.wrapper}>
            <div className={styles.authBlock}>
                <span className={styles.userName}>{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</span>
                <img className={styles.avatar} src={props.authUserAvatar ? props.authUserAvatar : authUserAvatarPlaceholder} alt="autorized user avatar" />
            </div>
        </div>

    </div>
}

export default MainHeader;