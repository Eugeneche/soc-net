import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { /* getUserProfile,  */getProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
     
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            /* userId = this.props.authorizedUserId */;
            userId = 9095;
        }

        this.props.getProfile(userId);

        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

/* the same with compose: */
const mapStateToProps = (state) => ({ 
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status 
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//const mapStateToProps = (state) => ({ userProfile: state.profilePage.userProfile });

//const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

//export default connect(mapStateToProps, {/* getUserProfile,  */getProfile})(WithUrlDataContainerComponent);