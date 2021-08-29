// constant vars for profile page
const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

// constant vars for dialogs page
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

// action creators for profile page
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})

// action creators for dialogs page
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})

// bussiness object for processing user`s data
const store = {
    _state: {
        profilePage: {
            posts: [
                {name: 'Vlad', text: 'Hello world', likes_count: 4},
                {name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1},
                {name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3},
            ],
            newPostText: ''
        },
        dialogsPage: {
            users: [
                {id: 1,name: 'Vlad'},
                {id: 2,name: 'Kate'},
                {id: 3,name: 'Victor'},
                {id: 4,name:'Maks'}
            ],
              
            messages: [
                {id: 1, text: 'Hello, boy!', sender: 0},
                {id: 2, text: 'How are you?', sender: 1},
                {id: 3, text: 'Fine', sender: 0},
                {id: 4, text: 'what happens?', sender: 0},
                {id: 5, text: 'just tired a little bit', sender: 1}
            ],
            newMessageText: ''
        }
    },
    _renderTree() {},


    get state() {
        return this._state
    },

    // observer pattern
    regenerator(observer) {
        this._renderTree = observer
    },

    // method for updating posts on profile page and sending messages on dialogs page
    dispatch(action) { // action = {type: str, param: any}
        if (action.type === ADD_NEW_POST) {
            const newPost = {
                name: 'Vlad', text: this.state.profilePage.newPostText, likes_count: 0
            }
            this._state.profilePage.posts.unshift(newPost)  
            this._state.profilePage.newPostText = ''
            this._renderTree(this._state)
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._renderTree(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: 6, text: this._state.dialogsPage.newMessageText, sender: 0
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._renderTree(this._state)
        } else if(action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text
            this._renderTree(this._state)
        } 
    }
}

export default store
