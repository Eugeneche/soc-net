const LOAD_USERS = 'LOAD-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';



let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}

export const loadUsers = (users) => ({type: LOAD_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); 


const usersReducer = (state = initialState, action) => {
debugger;
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

        default:
            return state;
    }
}

export default usersReducer;