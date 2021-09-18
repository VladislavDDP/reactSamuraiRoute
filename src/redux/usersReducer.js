import { userAPI } from "../components/API/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET_STATE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOW_TIMEOUT = 'SET_FOLLOW_TIMEOUT'


const initialState = {
    users: [],
    currentPage: 1,
    totalPagesCount: 80,
    pageSize: 10,
    isFetching: false,
    isFollowTimeOut: []
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

        case SET_FOLLOW_TIMEOUT:
            return {
                ...state,
                isFollowTimeOut: action.isFetching
                ? [...state.isFollowTimeOut, action.userId]
                : state.isFollowTimeOut.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

// action creators for users page
export const followUser = (userId) => ({type: FOLLOW, userId})
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_STATE, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const setFollowTimeOut = (isFetching, userId) => ({type: SET_FOLLOW_TIMEOUT, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items))
            dispatch(setTotalPagesCount(response.totalCount > 1000? 80 : 50))
            dispatch(setIsFetching(false))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowTimeOut(true, userId))
        userAPI.unfollowUser(userId)
        .then(
            response => {
                if (!response.resultCode) {
                    dispatch(unfollowUser(userId))
                }
                dispatch(setFollowTimeOut(false, userId))
            }   
        )
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowTimeOut(true, userId))
        userAPI.followUser(userId).then(
            response => {
                if (!response.resultCode) {
                    dispatch(followUser(userId))
                }    
                dispatch(setFollowTimeOut(false, userId))
            }
        )
    }
}

export default usersReducer