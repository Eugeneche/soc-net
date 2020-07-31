import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../img/user_avatar.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
    //debugger;
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesPagination = pages.map(page => {
        return <span key={page} className={page === props.currentPage ? styles.selected : ''} 
        onClick={ (e) => props.getCurrentUsers(page)}>{page}</span>
    });
//debugger;
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
                    {user.followed ? 
                    <div className={styles.isFriend}>
                        <span>friend</span>
                        <button onClick={ () => { 
                            props.toggleIsFetching(true);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true, 
                                headers: {
                                    'API-KEY': '69ce5c37-4614-409a-848d-cee47ea3fbcd'
                                }
                            }) 
                            .then(response => {
                                if(response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                }
                                props.toggleIsFetching(false);
                            }); 

                        } }>Unfollow</button></div> : 

                        <button className={styles.isFriend} onClick={ () => { 
                            props.toggleIsFetching(true);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true, 
                                headers: {
                                    'API-KEY': '69ce5c37-4614-409a-848d-cee47ea3fbcd'
                                }
                            }) 
                            .then(response => {
                                if(response.data.resultCode === 0) {
                                    props.follow(user.id);
                                }
                                props.toggleIsFetching(false);
                            }); 
                            
                        } }>Follow</button>}
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