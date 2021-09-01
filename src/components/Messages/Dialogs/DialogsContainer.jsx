import React from 'react'
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogsReducer'
import StoreContext from '../../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
        {
            (store) => {
                
                const state = store.getState()

                const sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
            
                const updateMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text))
                }
                return (
                    <Dialogs users={state.dialogsPage.users}
                             messages={state.dialogsPage.messages} 
                             newMessageText={state.dialogsPage.newMessageText}
                             sendMessage={sendMessage} 
                             updateMessageText={updateMessageText}/>
                )
            }
        }
        </StoreContext.Consumer>
    ) 
}

export default DialogsContainer