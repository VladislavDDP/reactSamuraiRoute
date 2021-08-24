import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
    let users = props.users.map(user => (<Dialog id={user.id} name={user.name} />))
    let messages = props.messages.map(message => (<Message text={message.text} />))
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {users}
            </div>
            <div className={s.messsages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs