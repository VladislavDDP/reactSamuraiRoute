import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {
    let users = props.users.map(user => (
                    <Dialog id={user.id} name={user.name} />))
    let messages = props.messages.map(message => (
                    <Message text={message.text} sender={message.sender} />))

    const sendMessageText = React.createRef()

    const sendMessage = () => {
        const messageText = sendMessageText.current.value
        props.sendMessage(messageText)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>
            <div className={s.messsages}>
                {messages}
            </div>

            <div className={s.send_message}>
                <textarea className={s.messageTextarea} ref={sendMessageText} placeholder='Type message...' name="" rows="1"></textarea>
                <button className={s.send_message_btn} onClick={sendMessage}>&gt;</button>
            </div>
        </div>
    )
}

export default Dialogs