import React from 'react';
import { usersAPI } from '../../API/API';
import mainPicture from '../../img/main.jpg';

const Main = () => {

    usersAPI.getAuthMeData();

    return <>
            <img src={mainPicture} alt="main" />
        </>
}

export default Main;