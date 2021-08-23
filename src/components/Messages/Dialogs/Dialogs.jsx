import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    const path = '/messages/' + props.id
    return (
        <div className={s.user}>
            <img src="https://img.icons8.com/cute-clipart/2x/telegram-app.png" alt="avatar" width='40' height='40'/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.messsage}>{props.text}</div>
    )
}

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
        {id: 3, text: 'and you?'}
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