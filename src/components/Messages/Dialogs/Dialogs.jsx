import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = () => {
    let users = [
        {id: 1,name: 'Vlad'},
        {id: 2,name: 'Victor'},
        {id: 3,name:'Maks'}
    ]

    let usersElements = users.map(user => (<Dialog id={user.id} name={user.name} />))

    let messages = [
        {id: 1, text: 'Hello, boy!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Fine'},
        {id: 4, text: 'what happens?'},
        {id: 5, text: 'just tired a little bit'}
    ]
    

    let messagesElements = messages.map(message => (<Message text={message.text} />))
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElements}
            </div>
            <div className={s.messsages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs