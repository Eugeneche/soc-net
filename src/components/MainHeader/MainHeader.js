import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';


const MainHeader = (props) => {

    return <div className={styles.mineHeader}>
        <div className={styles.wrapper}>
            {/* <div className={styles.authBlock}> */}
                <NavLink className={styles.userName} to="/login">Login</NavLink>
            {/* </div> */}
        </div>

    </div>
}

export default MainHeader;