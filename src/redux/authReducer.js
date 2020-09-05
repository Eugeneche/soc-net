import { profileAPI, authAPI } from "../API/API";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_AUTH_USER_AVATAR = 'SET-AUTH-USER-AVATAR';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    authorizedUserAvatar: null
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state, 
                ...action.data,
                isAuth: true
            }

        case SET_AUTH_USER_AVATAR:
            return {
                ...state,
                authUserAvatar: action.authUserAvatar
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}});
export const setAuthUserAvatar = (authUserAvatar) => ({type: SET_AUTH_USER_AVATAR, authUserAvatar});

/* thunks */

export const setAuthMeData = () => {
    return (dispatch) => {
        authAPI.getAuthMeData()
        .then(response => {
            if(response.data.resultCode === 0) {  
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }          
        });
    }
}

export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
        .then(response => {
            let authUserAvatar = response.data.photos.small;
            dispatch(setAuthUserAvatar(authUserAvatar));
        });
    }
}

export default authReducer;