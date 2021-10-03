import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { Redirect } from 'react-router'

const Header = (props) => {
    const openBurger = () => {
        const menu = document.querySelector(`.${s.profile_header}`)
        menu.classList.toggle(`${s.active}`)
    }

    return (
        <div className={s.header}>
            <div></div>

            ~-~-~
            MICROBIUS
            ~-~-~

            <div className={s.profile_header}>
                <div className={s.login}>
                    { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
                { props.isAuth 
                ? <button className={s.logout_btn} onClick={props.logout}>exit</button> 
                : <Redirect to={'/login'} /> }
            </div>

            <div className={s.burger} onClick={openBurger}>
                <div className={s.line1}></div>
                <div className={s.line2}></div>
                <div className={s.line3}></div>
            </div>
            
        </div>  
    )
}

export default connect(null, {logout})(Header)