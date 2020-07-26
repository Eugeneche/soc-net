import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
     
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`) 
        .then(response => {
            this.props.getUserProfile(response.data);
        });
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