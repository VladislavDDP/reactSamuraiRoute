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
    let users = ['Vlad', 'Victor', 'Maks']
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <Dialog id='1' name='Vlad'/>
            </div>
            <div className={s.messsages}>
                <Message text='Hello, boy!'></Message>
                <Message text='How are you?'></Message>
                <Message text='and you?'></Message>
            </div>
        </div>
    )
}

export default Dialogs