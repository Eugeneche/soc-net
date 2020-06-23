import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../StoreContext';


const SidebarContainer = (props) => {
    return(
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState();

                return <Sidebar friends={state.sidebar.friends} menu={state.sidebar.menu} />
            }}
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;