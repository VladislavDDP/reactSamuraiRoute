import { loginAPI } from "../components/API/api" 

const AUTH_USER = 'AUTH_USER'

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
                isAuthorized: true
            }
        default:
            return state
    }
}

export const authUserProfile = (userId, email, login) => ({type: AUTH_USER, data: {userId, email, login}})

export const authAccount = () => {
    return (dispatch) => {
        loginAPI.authMe().then(
            response => {
                const {id, email, login} = response.data
                if (!response.resultCode) {
                    dispatch(authUserProfile(id, email, login))
                }
            }
        )
    }
}

export default authReducer