import React from 'react';
import { Redirect } from 'react-router-dom';
//import s from './News.module.css';


const News = (props) => {
    return <>
        {!props.isAuth
            ? <Redirect to='/login' />
            : <div>News</div>}
    </>         
}

export default News;