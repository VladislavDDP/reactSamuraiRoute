const AUTH_USER = 'AUTH_USER'

const initialState = {
    userId: null,
    email: null, 
    login: null
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default authReducer

export const authUserProfile = (userId, email, login) => ({type: AUTH_USER, data: {userId, email, login}})