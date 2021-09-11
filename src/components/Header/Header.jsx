import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className={s.header}>
            ~-~-~
            MICROBIUS
            ~-~-~

            <div>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </div>
    )
}

export default Header