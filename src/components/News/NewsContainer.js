import { connect } from 'react-redux';
import News from './News';


const mapDispatchToProps = (state) => ({isAuth: state.auth.isAuth});

const NewsContainer = connect(mapDispatchToProps, {})(News);

export default NewsContainer;