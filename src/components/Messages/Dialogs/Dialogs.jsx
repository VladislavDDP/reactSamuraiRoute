import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { isEmpty } from '../../validators/validators'
import { Route } from 'react-router'
import ExactMessages from './ExactMessages'

const Dialogs = (props) => {
    let users = props.users.map(user => (
                    <Dialog key={user.id} id={user.id} name={user.name} setActiveChatWithUser={props.setActiveChatWithUser} isActive={user.isActive} />))

    const sendMessage = (value) => {
        props.sendMessageToUser(value.messageBody, props.activeId - 1)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>

            <div className={s.messsages}>
                <Route path='/messages/:userId?' render={ () => <ExactMessages users={props.users} id={props.activeId - 1} />  } />
            </div>

            <ReduxMessageForm onSubmit={sendMessage} />

        </div>
    )
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.send_message}>
                <Field component='textarea' validate={[isEmpty]}
                       className={s.messageTextarea} 
                       placeholder='Type message...' 
                       name="messageBody" />
                <button className={s.send_message_btn}>&gt;</button>
            </div>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'send-message-form'})(MessageForm)

export default Dialogs