import { connect } from 'react-redux';
import Settings from './Settings';


const mapDispatchToProps = (state) => ({isAuth: state.auth.isAuth});

const SettingsContainer = connect(mapDispatchToProps, {})(Settings);

export default SettingsContainer;