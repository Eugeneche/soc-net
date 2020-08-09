import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { /* getUserProfile,  */getProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
     
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            /* userId = this.props.authorizedUserId */;
            userId = 9095;
        }

        this.props.getProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.userProfile} />
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    //authorizedUserId: state.auth.userId
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {/* getUserProfile,  */getProfile})(WithUrlDataContainerComponent);