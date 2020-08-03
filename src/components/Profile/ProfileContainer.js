import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../API/API';

class ProfileContainer extends React.Component {
     
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        usersAPI.getProfile(userId) 
        .then(response => this.props.getUserProfile(response.data));
    }

    render() {
        return <Profile {...this.props} profile={this.props.userProfile} />
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    authorizedUserId: state.auth.userId
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);