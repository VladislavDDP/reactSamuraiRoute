import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { Redirect } from 'react-router'

const Dialogs = (props) => {
    let users = props.users.map(user => (
                    <Dialog key={user.id} id={user.id} name={user.name} setActiveChatWithUser={props.setActiveChatWithUser} isActive={user.isActive} />))
    let messages = props.messages.map(message => (
                    <Message key={message.id} text={message.text} sender={message.sender} />))

    const sendMessage = () => {
        props.sendMessage()
    }

    const updateMessageText = (event) => {
        const text = event.target.value
        props.updateMessageText(text)
    }

    if (!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>

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