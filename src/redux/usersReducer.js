import { usersAPI } from "../API/API";

const LOAD_USERS = 'LOAD-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOW_PROCESSING = 'TOGGLE-IS-FOLLOW-PROCESSING';



let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followProcessingUsers: []
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_USERS:
            return {
                ...state, users: [ ...action.users]
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: true}
                    }
                    return user;
                })             
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user;
                })
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOW_PROCESSING:
            return {
                ...state, 
                followProcessingUsers: action.isFetching 
                ? [...state.followProcessingUsers, action.userId] 
                : [state.followProcessingUsers.filter(uid => uid !== action.userId)] 
            }

        default:
            return state;
    }
}

export const loadUsers = (users) => ({type: LOAD_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const followAction = (userId) => ({type: FOLLOW, userId});
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); 
export const toggleIsFollowProcessing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOW_PROCESSING, isFetching, userId});

/* thunks */

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(loadUsers(data.items)); 
            dispatch(setCurrentPage(currentPage));  
            dispatch(setTotalUsersCount(data.totalCount)); 
        });  
    }
} 

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowProcessing(true, userId));
        dispatch(toggleIsFetching(true));

    usersAPI.follow(userId)
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(followAction(userId));
        }
        dispatch(toggleIsFollowProcessing(false, userId));
        dispatch(toggleIsFetching(false));
    }); 
    } 
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowProcessing(true, userId));
        dispatch(toggleIsFetching(true));

    usersAPI.unfollow(userId)
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(unfollowAction(userId));
        }
        dispatch(toggleIsFollowProcessing(false, userId));
        dispatch(toggleIsFetching(false));
    }); 
    } 
}

export default usersReducer;