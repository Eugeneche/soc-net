import React from 'react';
import * as axios from 'axios';

class Login extends React.Component {

    componentDidMount() {
        axios.put(`https://social-network.samuraijs.com/api/1.0//profile/status`, {
            status: 'All right!'
        })
        .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    }

    render() {

        return<></>
    }
}

export default Login;