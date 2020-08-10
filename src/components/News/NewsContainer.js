import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const NewsContainer = (props) => {

    return <News />
}

export default compose( connect(), withAuthRedirect )(NewsContainer);


//const AuthRedirectComponent = withAuthRedirect(NewsContainer);

//const mapDispatchToProps = (state) => ({ });

//export default connect(null, {})(AuthRedirectComponent);