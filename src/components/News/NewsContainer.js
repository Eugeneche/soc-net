import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const NewsContainer = (props) => {

    return <News />
}

const AuthRedirectComponent = withAuthRedirect(NewsContainer);

//const mapDispatchToProps = (state) => ({ });

export default connect(null, {})(AuthRedirectComponent);