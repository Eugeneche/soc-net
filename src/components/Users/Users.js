import React from 'react';
import styles from './Users.module.css';
import userAvatarPlaceholder from '../../img/user_avatar_placeholder.png';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator/Paginator';
//import { setCurrentPage } from '../../redux/usersReducer';

const Users = (props) => {

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
        <Paginator 
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            getCurrentUsers={props.getCurrentUsers} />
        <div className={styles.users}>{users}</div>
    </>
}

export default Users;