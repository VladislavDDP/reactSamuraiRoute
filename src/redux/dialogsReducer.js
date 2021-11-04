import { reset } from "redux-form"

const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'
const SET_ACTIVE_CHAT_WITH_USER = 'dialogs/SET_ACTIVE_CHAT_WITH_USER'

const initialState = {
    users: [
        {id: 1, name: 'Vlad', isActive: true, messages: [
            {id: 1, text: 'Hello, boy!', sender: 0},
            {id: 2, text: 'How are you?', sender: 1},
            {id: 3, text: 'Fine', sender: 0},
            {id: 4, text: 'what happens?', sender: 0},
            {id: 5, text: 'just tired a little bit', sender: 1}
        ]},
        {id: 2, name: 'Kate', isActive: false, messages: [
            {id: 1, text: 'hey', sender: 0},
            {id: 2, text: 'react?', sender: 1},
            {id: 3, text: 'are you ok?', sender: 0},
            {id: 4, text: 'was he so smart as now?', sender: 0},
        ]},
        {id: 3, name: 'Victor', isActive: false, messages: [
            {id: 1, text: 'really', sender: 0},
            {id: 2, text: 'thats true?', sender: 1}
        ]},
        {id: 4, name:'Maks', isActive: false, messages: [
            {id: 1, text: 'hey', sender: 0},
            {id: 2, text: 'react?', sender: 1},
            {id: 3, text: 'yeee lesgo', sender: 0},
            {id: 4, text: 'did you pass everything?', sender: 1}

        ]}
    ],
    activeId: 1
}

const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.users[action.id].messages[state.users[action.id].messages.length - 1].id + 1, text: action.message, sender: 0
            }
            return {
                ...state,
                users: state.users.map((user, index) => {
                    if (index === action.id) {
                        user.messages.push(newMessage)
                    }
                    return user
                }),
                newMessageText: ''
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
                }),
                activeId: action.id
            }
        default:
            return state
    }
}

// action creators for dialogs page
export const sendMessage = (message, id) => ({type: SEND_MESSAGE, message, id})
export const setActiveChatWithUser = (id) => ({type: SET_ACTIVE_CHAT_WITH_USER, id})

export const sendMessageToUser = (message, id) => {
    return (dispatch) => {
        dispatch(sendMessage(message, id))
        dispatch(reset('send-message-form'))
    }
}

export default dialogsReducer