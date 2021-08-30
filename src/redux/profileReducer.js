const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state, action) => {
    if (action.type === ADD_NEW_POST) {
        const newPost = {
            name: 'Vlad', text: state.newPostText, likes_count: 0
        }
        state.posts.unshift(newPost)  
        state.newPostText = ''
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.text
    }
    return state
}

// action creators for profile page
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})

export default profileReducer