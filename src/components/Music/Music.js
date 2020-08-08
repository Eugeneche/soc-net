import React from 'react';
import { Redirect } from 'react-router-dom';
//import s from './Music.module.css';


const Music = (props) => {
debugger;
    return <>
        {!props.isAuth 
            ? <Redirect to='/login' /> 
            :  <div>Music</div>}       
    </>
        
}

export default Music;