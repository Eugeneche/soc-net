import { connect } from 'react-redux';
import Users from './Users';
import { loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const UsersContainer = connect(mapStateToProps, 
    {loadUsers, setTotalUsersCount, setCurrentPage, follow, unfollow})(Users);

export default UsersContainer;