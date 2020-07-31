import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '69ce5c37-4614-409a-848d-cee47ea3fbcd'
    }
});

/* for UserContainer */
export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        debugger;
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data)
    }
}

/* for ProfileContainer */
export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
        .then(response => response.data)
    }
}

/* export const getUsers = (pageSize = 10, currentPage = 1) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {withCredentials: true})
        .then(response => response.data)
} */