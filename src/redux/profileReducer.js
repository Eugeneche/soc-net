const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let initialState = {
  posts: [
    {id: 1, postText: 'Hi there!', likesCount: 10},
    {id: 2, postText: 'It\'s my new post.', likesCount: 25765},
  ],
  writingPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
      case ADD_POST: 
      let text = state.writingPostText;

      return {
        ...state,
        posts: [ ...state.posts, {id: 5, postText: text, likesCount: 0} ],
        writingPostText: ''
      };
      
      case CHANGE_POST: 
      
        return {
          ...state,
          writingPostText: action.text
        }
      
      default: 
        return state;
      
  }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
  export const changePostActionCreator = (text) => {
    return {
      type: CHANGE_POST,
      text: text
    }
  }

  export default profileReducer;