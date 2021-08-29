import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/state'

const Dialogs = (props) => {
    let users = props.users.map(user => (
                    <Dialog id={user.id} name={user.name} />))
    let messages = props.messages.map(message => (
                    <Message text={message.text} sender={message.sender} />))

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const updateMessageText = (event) => {
        const text = event.target.value
        props.dispatch(updateMessageTextActionCreator(text))
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>
            {/* <Route path={`/messages/${users.target.id}`} component={userChat} /> */}

            <div className={s.messsages}>
                {messages}
            </div>

            <div className={s.send_message}>
                <textarea className={s.messageTextarea} onChange={updateMessageText} value={props.newMessageText} placeholder='Type message...' name="" rows="1"></textarea>
                <button className={s.send_message_btn} onClick={sendMessage}>&gt;</button>
            </div>
        </div>
    )
}

export default Dialogs