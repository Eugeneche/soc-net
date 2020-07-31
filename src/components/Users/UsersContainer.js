import React from 'react'; 
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../commom/Preloader/Preloader';
import { loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow, toggleIsFetching } from '../../redux/usersReducer';
import { usersAPI } from '../../API/API';


class UsersContainer extends React.Component {

    componentDidMount() {
        debugger;
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(data.items);   
            this.props.setTotalUsersCount(data.totalCount); 
        });        
    }

    getCurrentUsers = (currentPage) => {
        debugger;
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, currentPage)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(data.items);
        }); 
        debugger;         
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            
            <Users 
                users={this.props.users} 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                getCurrentUsers={this.getCurrentUsers}
                toggleIsFetching={this.props.toggleIsFetching} />
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

export default connect(mapStateToProps, 
    {loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow, toggleIsFetching})(UsersContainer);

    /* import React from 'react';
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
        debugger;
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`) 
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(response.data.items);
        });   
        debugger;

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

export default UsersContainer; */