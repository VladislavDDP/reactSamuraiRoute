import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    const openNavbar = () => {
        const navbar = document.querySelector(`.${s.nav}`)
        navbar.classList.toggle(`${s.activated_navbar}`)
    }

    return (
        <>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            </nav>
            <div onClick={openNavbar} className={s.burger}></div>
        </>
    )
}

export default Navbar