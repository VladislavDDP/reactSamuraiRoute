import { followAPI, userAPI } from "../components/API/api"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_STATE = 'users/SET_STATE'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_PAGES_COUNT = 'users/SET_TOTAL_PAGES_COUNT'
const SET_IS_FETCHING = 'users/SET_IS_FETCHING'
const SET_FOLLOW_TIMEOUT = 'users/SET_FOLLOW_TIMEOUT'


const initialState = {
    users: [],
    currentPage: 1,
    totalPagesCount: 80,
    pageSize: 12,
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

export const followUser = (userId) => ({type: FOLLOW, userId})
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_STATE, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const setFollowTimeOut = (isFetching, userId) => ({type: SET_FOLLOW_TIMEOUT, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(true))
        const response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        dispatch(setTotalPagesCount(response.totalCount > 1000? 80 : 50))
        dispatch(setIsFetching(false))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowTimeOut(true, userId))
        const response = await followAPI.unfollowUser(userId)
        if (!response.resultCode) {
            dispatch(unfollowUser(userId))
        }
        dispatch(setFollowTimeOut(false, userId))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowTimeOut(true, userId))
        const response = await followAPI.followUser(userId)
        if (!response.resultCode) {
            dispatch(followUser(userId))
        }    
        dispatch(setFollowTimeOut(false, userId))
    }
}

export default usersReducer