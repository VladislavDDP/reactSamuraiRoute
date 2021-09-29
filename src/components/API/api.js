import axios from "axios"
import { API_KEY } from "./api-key"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
                       .then(response => response.data)
    }
}

export const followAPI = {
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    }
}


export const profileAPI = {
    setMyProfile() {
        return instance.get('auth/me').then(response => response.data)
    },

    setUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getProfileStatus(id) {
        return instance.get(`profile/status/${id}`)
    },

    updateProfileStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}

export const loginAPI = {
    authMe() {
        return instance.get('auth/me')
             .then(response => response.data)
    },
    login(email, password, rememberMe=false) {
        return instance.post('auth/login', {email, password, rememberMe})
                       .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login', {})
                       .then(response => response.data)
    },
}
