import React from 'react';
import { connect } from 'react-redux';
import Music from './Music';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const MusicContainer = (props) => {

    return <Music />
}

export default compose( connect(),  withAuthRedirect )(MusicContainer);

//const AuthRedirectContainer = withAuthRedirect(MusicContainer);

//let mapStateToProps = (state) => ({ });

//export default connect(null, {})(AuthRedirectContainer);