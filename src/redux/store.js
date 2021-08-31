import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

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
    subscribe(observer) {
        this._renderTree = observer
    },

    // updating posts on profile page and sending messages on dialogs page
    // action = {type: str, param: any}
    dispatch(action) { 
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._renderTree(this._state)
    }
}

export default store
