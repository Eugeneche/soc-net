import React from 'react';
import s from './Sidebar.module.css';
import Friend from './Friends/Friend';
import { NavLink } from 'react-router-dom';



const Sidebar = (props) => {

    let friends = props.friends.map(friend => {

        return(
            <div key={friend.id} className={s.friend}><Friend name={friend.name} avatarLink={friend.avatarLink} /></div>
        )
    });

    let menu = props.menu.map(page => {
        return(
            <li key={page.page}><NavLink to={page.link} activeClassName={s.active}>{page.page}</NavLink></li>
        )
    });

    return(
        <nav className={s.sidebar}>
            <ul>
                {menu}
                <li className={s.bold}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>

            <div>
                <ul>
                    <li className={s.bold}><NavLink to="/friends" activeClassName={s.active}>My friends</NavLink></li>
                </ul>
                {friends}             
            </div>
        </nav>
    );
    
}

export default Sidebar;