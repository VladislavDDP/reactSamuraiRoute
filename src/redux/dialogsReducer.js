const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SET_ACTIVE_CHAT_WITH_USER = 'SET_ACTIVE_CHAT_WITH_USER'

const initialState = {
    users: [
        {id: 1, name: 'Vlad', isActive: true},
        {id: 2, name: 'Kate', isActive: false},
        {id: 3, name: 'Victor', isActive: false},
        {id: 4, name:'Maks', isActive: false}
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
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            } 
        case UPDATE_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.text
            }

        case SET_ACTIVE_CHAT_WITH_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        user.isActive = true
                        return user
                    }
                    user.isActive = false
                    return user
                })
            }
        default:
            return state
    }
}

// action creators for dialogs page
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})
export const setActiveChatWithUserActionCreator = (id) => ({type: SET_ACTIVE_CHAT_WITH_USER, id})

export default dialogsReducer