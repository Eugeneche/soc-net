import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const SettingsContainer = (props) => {

    return <Settings />
}

const AuthRedirectComponent = withAuthRedirect(SettingsContainer);

//const mapDispatchToProps = (state) => ({ });

export default connect(null, {})(AuthRedirectComponent);