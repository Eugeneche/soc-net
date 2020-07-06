import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userAvatar from '../../img/user_avatar.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.loadUsers(response.data.items);    
        });        
    }

    render() {

        let users = this.props.users.map(user => {
            return (
                <div key={user.id} className={styles.userItem}>
                    <div className={styles.avatar}>
                        <img className={styles.userPhoto} alt="user-avatar" src={user.photos.small !== null ? user.photos.small : userAvatar} />
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.mane}>{user.name}</div>
                        <div className={styles.status}>{user.status}</div>                       
                    </div>
                    <div className={styles.friendBlock}>
                        {user.followed === true ? 
                        <div className={styles.isFriend}><span>friend</span><button onClick={ () => {
                        this.props.unfollow(user.id)} }>Unfollow</button></div> : <button className={styles.isFriend} onClick={ () => {this.props.follow(user.id)} }>Follow</button>}
                    </div>
                    
                    
                </div>
            )
        });

        return <div className={styles.users}>
            {users}
        </div>
    }
}

export default Users;