import React from 'react';
import { Redirect } from 'react-router-dom';


const Settings = (props) => {

    return <>
        {!props.isAuth
            ? <Redirect to='/login' />
            : <div>Settings</div>}
    </>        
}

export default Settings;