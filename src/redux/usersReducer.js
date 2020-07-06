const LOAD_USERS = 'LOAD-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
/*         {"name": "John", "id": 1, "photos": {"large": null, "small": null,}, "status": "All right!", "followed": false},
        {"name": "Olga", "id": 2, "photos": {"large": null, "small": null,}, "status": "I love rock'n'roll!", "followed": true},
        {"name": "Ann", "id": 3, "photos": {"large": null, "small": null,}, "status": "The World is awesome!", "followed": true}, */
    ]
}

export const loadUsers = (users) => ({type: LOAD_USERS, users});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
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

        default:
            return state;
    }
}

export default usersReducer;