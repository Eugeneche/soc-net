import React from 'react';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';
import { setAuthMeData, getProfile } from '../../redux/authReducer';


class MainHeaderContainer extends React.Component {

    componentDidMount() {

        this.props.setAuthMeData();

        this.props.getProfile(this.props.id);
    }

    render() {
        return <MainHeader {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    authUserAvatar: state.auth.authUserAvatar
});

export default connect(mapStateToProps, {setAuthMeData, getProfile})(MainHeaderContainer);