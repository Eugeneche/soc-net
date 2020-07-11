import React from 'react';
import * as axios from 'axios';
import styles from './Users.module.css';
import userAvatar from '../../img/user_avatar.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
            this.props.loadUsers(response.data.items);   
            this.props.setTotalUsersCount(response.data.totalCount); 
        });        
    }

    getCurrentUsers = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`) 
        .then(response => {
            this.props.loadUsers(response.data.items);
        });  
         
    }

    render() {

        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let pagesPagination = pages.map(page => {
            return <span key={page} className={this.props.currentPage === page && styles.selected} 
            onClick={ (e) => this.props.setCurrentPage(page)}>{page}</span>
        });

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

        return <>
            <div className={styles.pagination}>
                {pagesPagination}
            </div>
            <div className={styles.users}>
                {users}
            </div>
        </>
    }
}

export default Users;