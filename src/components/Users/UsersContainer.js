import React from 'react'; 
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../commom/Preloader/Preloader';
import { loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow, toggleIsFetching, toggleIsFollowProcessing, getUsers } from '../../redux/usersReducer';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.pageSize, this.props.currentPage);
/*         this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(data.items);   
            this.props.setTotalUsersCount(data.totalCount); 
        });   */      
    }

    getCurrentUsers = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage);
/*         this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, currentPage)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.loadUsers(data.items);
        });  */       
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
                toggleIsFetching={this.props.toggleIsFetching}
                toggleIsFollowProcessing={this.props.toggleIsFollowProcessing}
                followProcessingUsers={this.props.followProcessingUsers} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProcessingUsers: state.usersPage.followProcessingUsers
    }
}

export default connect(mapStateToProps, 
    {loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow, toggleIsFetching, toggleIsFollowProcessing, getUsers})(UsersContainer);