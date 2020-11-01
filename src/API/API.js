import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '69ce5c37-4614-409a-848d-cee47ea3fbcd'
    }
});

export const usersAPI = {
    
    /* UserContainer - to get part of users for start/current page */
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data)
    },

    /* Users - to follow certain user */
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    /* Users - to follow certain user */
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    
    /* MainHeaderContainer, ProfileContainer - to get certain user profile */
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
        /* .then(response => response.data) */
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    /* MainHeaderContainer - to get and set authorized user data */
    getAuthMeData() {
        return instance.get('auth/me');
    },

    /* Login - to login if user is not authorized  */
    sendAuthData(loginFormData) {
        return instance.post('auth/login', {loginFormData});
    }  
}
