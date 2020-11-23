import { profileAPI } from "../API/API";
//import { RESET } from './actionTypes';
//import type { FieldType } from './types.js.flow';
//import type { Reset } from './actions.types';

const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const GET_USER_PROFILE = 'GET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';



let initialState = {
  posts: [
/*     {id: 1, postText: 'Hi there!', likesCount: 10},
    {id: 2, postText: 'It\'s my new post.', likesCount: 25765}, */
  ],
  writingPostText: '',
  userProfile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
      case ADD_POST: 
      let text = state.writingPostText;
      let id = new Date().valueOf();

        return {
          ...state,
          posts: [ ...state.posts, {id: id, postText: text, likesCount: 0} ],
          writingPostText: ''
        }
      
      case CHANGE_POST:      
        return {
          ...state, 
          writingPostText: action.text
        }

      case GET_USER_PROFILE:
        return {
          ...state, userProfile: action.userProfile
        }

      case SET_USER_STATUS:
        return {
          ...state, status: action.status
        }
      
      default: 
        return state;
      
  }
}

const addPostActionCreator = () => ({ type: ADD_POST });
const changePostActionCreator = (text) => ({ type: CHANGE_POST, text });
const getUserProfile = (userProfile) => ({ type: GET_USER_PROFILE, userProfile });
const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

/* thunk */

export const addPost = () => {
  return dispatch => {
    dispatch(addPostActionCreator());
  }
}

export const changePost = text => {
  return dispatch => {
    dispatch(changePostActionCreator(text));
  }
}

/* export const reset: Reset = (form: 'post'): ResetAction => ({
  type: RESET,
  meta: { form }
}) */

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId) 
    .then(response => dispatch(getUserProfile(response.data)));
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => dispatch(setUserStatus(response.data)));
  }
}
/* 2-nd way to write arrow function without return */
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    })
  }

export default profileReducer;