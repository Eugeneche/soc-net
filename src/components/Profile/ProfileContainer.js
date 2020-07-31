import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../API/API';

class ProfileContainer extends React.Component {
     
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        profileAPI.getProfile(userId) 
        .then(data => this.props.getUserProfile(data));
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