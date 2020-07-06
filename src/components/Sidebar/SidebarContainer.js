import Sidebar from './Sidebar';
import { connect } from 'react-redux';


/* const SidebarContainer = (props) => {
    return(
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState();

                return <Sidebar friends={state.sidebar.friends} menu={state.sidebar.menu} />
            }}
        </StoreContext.Consumer>
    )
} */

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        menu: state.sidebar.menu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;