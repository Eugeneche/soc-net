import PostsTape from './PostsTape';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        writingPostText: state.profilePage.writingPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePostText: (text) => {
            dispatch(changePostActionCreator(text));
        }
    }
}

const PostsTapeContainer = connect(mapStateToProps, mapDispatchToProps)(PostsTape);

export default PostsTapeContainer;