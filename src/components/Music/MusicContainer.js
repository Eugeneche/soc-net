import React from 'react';
import { connect } from 'react-redux';
import Music from './Music';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const MusicContainer = (props) => {

    return <Music />
}

const AuthRedirectContainer = withAuthRedirect(MusicContainer);

//let mapStateToProps = (state) => ({ });

export default connect(null, {})(AuthRedirectContainer);