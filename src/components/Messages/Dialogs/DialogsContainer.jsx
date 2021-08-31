import React from 'react'
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    const state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const updateMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text))
    }
    
    return <Dialogs users={state.dialogsPage.users}
                    messages={state.dialogsPage.messages} 
                    newMessageText={state.dialogsPage.newMessageText}
                    sendMessage={sendMessage} 
                    updateMessageText={updateMessageText}/>
}

export default DialogsContainer