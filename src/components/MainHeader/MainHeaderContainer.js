import React from 'react';
import * as axios from 'axios';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthUserAvatar } from '../../redux/authReducer';

class MainHeaderContainer extends React.Component {

    componentDidMount() {
        
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then(response => {
            if(response.data.resultCode === 0) {  
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, login, email);
            }          
        });
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
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