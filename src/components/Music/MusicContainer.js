import { connect } from 'react-redux';
import Music from './Music';


let mapStateToProps = (state) => {
debugger;
    return {
        isAuth: state.auth.isAuth 
    }
}

const MusicContainer = connect(mapStateToProps, null)(Music);

export default MusicContainer;