import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const SettingsContainer = (props) => {

    return <Settings />
}

export default compose( connect(), withAuthRedirect )(SettingsContainer);

//const AuthRedirectComponent = withAuthRedirect(SettingsContainer);

//const mapDispatchToProps = (state) => ({ });

//export default connect(null, {})(AuthRedirectComponent);