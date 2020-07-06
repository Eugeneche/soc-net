import { connect } from 'react-redux';
import Users from './Users';
import { loadUsers, follow, unfollow } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = {loadUsers, follow, unfollow};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;