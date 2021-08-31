const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const initialState = {
    posts: [
        {name: 'Vlad', text: 'Hello world', likes_count: 4},
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
            state.posts.unshift(newPost)  
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}

// action creators for profile page
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})

export default profileReducer