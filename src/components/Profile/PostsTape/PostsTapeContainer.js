import PostsTape from './PostsTape';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

/* const PostsTapeContainer = (props) => {
   
    return(
            <StoreContext.Consumer>
                { (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                
                    const changePostText = (text) => {
                        store.dispatch(changePostActionCreator(text));
                    }

                    return(
                        <PostsTape addPost={addPost} changePostText={changePostText} posts={state.profilePage.posts} writingPostText={state.profilePage.writingPostText} />
                        )
                    }
                }
            </StoreContext.Consumer>
        )   
} */

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