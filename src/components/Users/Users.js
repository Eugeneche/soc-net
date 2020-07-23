import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../img/user_avatar.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesPagination = pages.map(page => {
        return <span key={page} className={props.currentPage === page && styles.selected} 
        onClick={ (e) => props.getCurrentUsers(page)}>{page}</span>
    });

    let users = props.users.map(user => {
        return (
            <div key={user.id} className={styles.userItem}>
                <NavLink to={"profile/" + user.id}>
                    <div className={styles.avatar}>
                        <img className={styles.userPhoto} alt="user-avatar" src={user.photos.small !== null ? user.photos.small : userAvatar} />
                    </div>
                </NavLink>
                <div className={styles.userInfo}>
                    <div className={styles.mane}>{user.name}</div>
                    <div className={styles.status}>{user.status}</div>                       
                </div>
                <div className={styles.friendBlock}>
                    {user.followed === true ? 
                    <div className={styles.isFriend}><span>friend</span><button onClick={ () => {
                    props.unfollow(user.id)} }>Unfollow</button></div> : <button className={styles.isFriend} onClick={ () => {props.follow(user.id)} }>Follow</button>}
                </div>                   
            </div>
        )
    });

    return <>
    <div className={styles.pagination}>
        {pagesPagination}
    </div>
    <div className={styles.users}>
        {users}
    </div>
</>
}

export default Users;