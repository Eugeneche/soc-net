import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../commom/Preloader/Preloader';
import { loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow, toggleIsFetching } from '../../redux/usersReducer';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(response.data.items);   
            this.props.setTotalUsersCount(response.data.totalCount); 
        });        
    }

    getCurrentUsers = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`) 
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(response.data.items);
        });          
    }

    render() {
        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            
            <Users 
                users={this.props.users} 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                getCurrentUsers={this.getCurrentUsers} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, 
    {loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow, toggleIsFetching})(UsersAPIContainer);

export default UsersContainer;