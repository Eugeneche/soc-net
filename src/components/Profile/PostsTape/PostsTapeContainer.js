import PostsTape from './PostsTape';
import { addPost, changePost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


let mapStateToProps = state => ({
        posts: state.profilePage.posts,
        writingPostText: state.profilePage.writingPostText
});

/* let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePostText: (text) => {
            dispatch(changePostActionCreator(text));
        }
    }
} */

const PostsTapeContainer = connect(mapStateToProps, { addPost, changePost })(PostsTape);

export default PostsTapeContainer;