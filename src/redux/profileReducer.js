const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const LIKE_POST = 'LIKE-POST'

const initialState = {
    posts: [
        {name: 'Vlad', text: 'How are you doing?', likes_count: 4},
        {name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1},
        {name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3},
    ],
    newPostText: ''
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NEW_POST:
            const newPost = {
                name: 'Vlad', text: state.newPostText, likes_count: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
            
        case LIKE_POST: 
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts[action.index].likes_count++
            return copyState
        default:
            return state
    }
}

// action creators for profile page
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})
export const likePostActionCreator = (index) => ({type: LIKE_POST, index: index})

export default profileReducer