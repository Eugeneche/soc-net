import React from 'react';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthUserAvatar } from '../../redux/authReducer';
import { usersAPI } from '../../API/API';

class MainHeaderContainer extends React.Component {

    componentDidMount() {

        usersAPI.getAuthMeData()
        .then(response => {
            if(response.data.resultCode === 0) {  
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, login, email);
            }          
        });

        usersAPI.getProfile(this.props.id)
        .then(response => {
            let authUserAvatar = response.data.photos.small;
            this.props.setAuthUserAvatar(authUserAvatar);
        });
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

export default connect(mapStateToProps, {setAuthUserData, setAuthUserAvatar})(MainHeaderContainer);