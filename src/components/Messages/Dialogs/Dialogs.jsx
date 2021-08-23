import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { render } from '@testing-library/react'

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

    let messages = [
        {id: 1, text: 'Hello, boy!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'and you?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Dialog id={users[0].id} name={users[0].name} />
                <Dialog id={users[1].id} name={users[1].name} />
                <Dialog id={users[2].id} name={users[2].name} />
            </div>
            <div className={s.messsages}>
                <Message text={messages[0].text} />
                <Message text={messages[1].text} />
                <Message text={messages[2].text} />
            </div>
        </div>
    )
}

export default Dialogs