const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state, action) => {
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