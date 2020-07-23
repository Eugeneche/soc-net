const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const GET_USER_PROFILE = 'GET-USER-PROFILE';

let initialState = {
  posts: [
    {id: 1, postText: 'Hi there!', likesCount: 10},
    {id: 2, postText: 'It\'s my new post.', likesCount: 25765},
  ],
  writingPostText: '',
  userProfile: null
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
      case ADD_POST: 
      let text = state.writingPostText;

        return {
          ...state,
          posts: [ ...state.posts, {id: 3, postText: text, likesCount: 0} ],
          writingPostText: ''
        }
      
      case CHANGE_POST:      
        return {
          ...state, writingPostText: action.text
        }

      case GET_USER_PROFILE:
        return {
          ...state, userProfile: action.userProfile
        }
      
      default: 
        return state;
      
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostActionCreator = (text) => ({ type: CHANGE_POST, text });
export const getUserProfile = (userProfile) => ({ type: GET_USER_PROFILE, userProfile });

export default profileReducer;