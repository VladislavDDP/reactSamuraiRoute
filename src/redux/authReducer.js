import { stopSubmit } from "redux-form"
import { loginAPI } from "../components/API/api" 

const AUTH_USER = 'AUTH_USER'
const AUTHORIZATION = 'AUTHORIZATION'

const initialState = {
    userId: null,
    email: null, 
    login: null,
    isAuthorized: false
}

const authReducer = (state=initialState, action) => {

    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data.isAuth
            }
        case AUTHORIZATION:
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state
    }
}

export const authUserProfile = (userId, email, login, isAuth) => (
    {type: AUTH_USER, data: {userId, email, login, isAuth}}
)
export const authorization = (userId) => ({type: AUTHORIZATION, data: {userId}})

export const authAccount = () => {
    return (dispatch) => {
        loginAPI.authMe().then(
            response => {
                const {id, email, login} = response.data
                if (!response.resultCode) {
                    dispatch(authUserProfile(id, email, login, true))
                }
            }
        )
    }
}

export const login = (email, password, rememberMe=false) => {
    return (dispatch) => {
        loginAPI.login(email, password, rememberMe).then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(authAccount())
                } else {
                    const message = response.messages.length ? response.messages[0] : 'Error on server...'
                    dispatch(stopSubmit('login-form', {_error: message}))
                }
            }
        )
    }
}

export const logout = () => {
    return (dispatch) => {
        loginAPI.logout().then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(authUserProfile(null, null, null, false))
                }
            }
        )
    }
}

export default authReducer