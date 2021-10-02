import { profileAPI } from "../components/API/api"

const ADD_NEW_POST = 'ADD_NEW_POST'
const LIKE_POST = 'LIKE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

const initialState = {
    posts: [
        {id: 3, name: 'Vlad', text: 'How are you doing?', likes_count: 4, liked: false},
        {id: 2, name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1, liked: false},
        {id: 1, name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3, liked: false},
    ],
    status: 'React',
    profile: null
}

const profileReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: state.posts[0].id + 1, name: 'Vlad', text: action.text, likes_count: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
            
        case LIKE_POST: 
            return {
                ...state,
                posts: state.posts.map((post, index) => {
                    if (index === action.index) {
                        if (!post.liked) return {...post, likes_count: ++post.likes_count, liked: true}
                        else return {...post, likes_count: --post.likes_count, liked: false}
                    }
                    return post
                })
            }

        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.text
            }
        default:
            return state
    }
}

// action creators for profile page
export const addNewPost = (text) => ({type: ADD_NEW_POST, text})
export const likePost = (index) => ({type: LIKE_POST, index})
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (text) => ({type: SET_USER_STATUS, text})

export const setOwnProfile = () => {
    return (dispatch) => {
        profileAPI.setMyProfile().then(
            response => {
                if (!response.resultCode) {
                    profileAPI.setUserProfile(response.data.id)
                        .then(
                            response => {
                                dispatch(setProfile(response))
                            }
                        )
                }
            }
        )
    }
}

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId).then(response => dispatch(setProfile(response)))
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(response => dispatch(setStatus(response.data)))
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    debugger
                    dispatch(setStatus(status))
                }
            })
                
    }
}

export default profileReducer