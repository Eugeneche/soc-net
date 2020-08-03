import React from 'react';
import styles from './Users.module.css';
import userAvatarPlaceholder from '../../img/user_avatar_placeholder.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesPagination = pages.map(page => {
        return <span key={page} className={page === props.currentPage ? styles.selected : ''} 
        onClick={ (e) => props.getCurrentUsers(page)}>{page}</span>
    });

    let users = props.users.map(user => {

        return (
            <div key={user.id} className={styles.userItem}>
                <NavLink to={"profile/" + user.id}>
                    <div className={styles.avatar}>
                        <img className={styles.userPhoto} alt="user-avatar" src={user.photos.small !== null ? user.photos.small : userAvatarPlaceholder} />
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
                        <button disabled={props.followProcessingUsers.some(uid => uid === user.id)} onClick={ () => {
                            props.unfollow(user.id);
                            /* props.toggleIsFollowProcessing(true, user.id);
                            props.toggleIsFetching(true);

                            usersAPI.unfollow(user.id)
                            .then(response => {
                                if(response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                }
                                props.toggleIsFollowProcessing(false, user.id);
                                props.toggleIsFetching(false);
                            });  */

                        } }>Unfollow</button></div> : 

                        <button className={styles.isFriend} 
                        disabled={props.followProcessingUsers.some(uid => uid === user.id)} onClick={ () => {
                            props.follow(user.id);
/*                             props.toggleIsFollowProcessing(true, user.id);
                            props.toggleIsFetching(true);

                            usersAPI.follow(user.id)
                            .then(response => {
                                if(response.data.resultCode === 0) {
                                    props.follow(user.id);
                                }
                                props.toggleIsFollowProcessing(false, user.id);
                                props.toggleIsFetching(false);
                            });  */
                            
                        } }>Follow</button>}
                </div>                   
            </div>
        )
    });

    return <>
        <div className={styles.pagination}>{pagesPagination}</div>
        <div className={styles.users}>{users}</div>
    </>
}

export default Users;