const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
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

const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 6, text: state.newMessageText, sender: 0
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state 
        case UPDATE_MESSAGE_TEXT: 
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

// action creators for dialogs page
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})

export default dialogsReducer