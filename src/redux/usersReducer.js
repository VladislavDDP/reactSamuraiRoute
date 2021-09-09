const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET_STATE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


const initialState = {
    users: [],
    currentPage: 1,
    totalPagesCount: 80,
    pageSize: 10,
    isFetching: true 
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

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                totalPagesCount: action.totalPagesCount
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        
        default:
            return state
    }
}

// action creators for users page
export const followUserAC = (userId) => ({type: FOLLOW, userId})
export const unfollowUserAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_STATE, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPagesCountAC = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount})
export const setIsFetchingAC = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount})

export default usersReducer