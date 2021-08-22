import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>My Profile</NavLink></div>
            <div className={s.item}><NavLink to="/messages" activeClassName={s.active}>My Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>My News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>My Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar