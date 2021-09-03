const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET-STATE'

const initialState = {
    users: []
}

const usersReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
            
        case SET_STATE: 
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

// action creators for users page
export const followUserActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowUserActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_STATE, users})

export default usersReducer