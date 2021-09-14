import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div></div>

            ~-~-~
            MICROBIUS
            ~-~-~

            <div className={s.login}>
                { props.isAuthorized? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>  
    )
}

export default Header