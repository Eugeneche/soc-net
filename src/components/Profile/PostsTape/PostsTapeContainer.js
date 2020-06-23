import React from 'react';
import PostsTape from './PostsTape';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';

const PostsTapeContainer = (props) => {
   
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
}

export default PostsTapeContainer;