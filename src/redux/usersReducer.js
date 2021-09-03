const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET-STATE'

const initialState = {
    users: [
        {id: 1, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
            name: 'Kate', status: 'Like beautiful bags', location: {country: 'Ukraine', city: 'Kyiv'}, followed: false},
        {id: 2, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
            name: 'Nikita', status: 'Study a lot', location: {country: 'Ukraine', city: 'Kyiv'}, followed: true},
        {id: 3, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
            name: 'Oleg', status: 'Ecology is important thing', location: {country: 'Ukraine', city: 'Kyiv'}, followed: false},
        {id: 4, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
            name: 'Nazar', status: 'Python is cool', location: {country: 'Ukraine', city: 'Kyiv'}, followed: false},
    ]
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
                users: [...state.users, action.users]
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