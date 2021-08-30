const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        const newMessage = {
            id: 6, text: state.newMessageText, sender: 0
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if(action.type === UPDATE_MESSAGE_TEXT) {
        state.newMessageText = action.text
    } 
    return state
}

// action creators for dialogs page
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})

export default dialogsReducer