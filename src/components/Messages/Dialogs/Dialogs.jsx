import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
    let users = props.users.map(user => (
                    <Dialog key={user.id} id={user.id} name={user.name} setActiveChatWithUser={props.setActiveChatWithUser} isActive={user.isActive} />))
    let messages = props.messages.map(message => (
                    <Message key={message.id} text={message.text} sender={message.sender} />))

    const sendMessage = (value) => {
        props.sendMessage(value.messageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>

            <div className={s.messsages}>
                {messages}
            </div>

            <ReduxMessageForm onSubmit={sendMessage}/>
        </div>
    )
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.send_message}>
                <Field component='textarea' className={s.messageTextarea} placeholder='Type message...' name="messageBody" />
                <button className={s.send_message_btn}>&gt;</button>
            </div>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'send-message-form'})(MessageForm)

export default Dialogs