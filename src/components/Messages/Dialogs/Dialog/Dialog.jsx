import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    const path = '/messages/' + props.id
    return (
        <div className={s.user}>
            <NavLink to={path} className={s.user} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog