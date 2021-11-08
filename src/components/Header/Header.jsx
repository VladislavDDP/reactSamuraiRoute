import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { Redirect } from 'react-router'
import React from 'react'

const Header = React.memo((props) => {

    const openBurger = () => {
        const profile_header = props.profile_header.current
        profile_header.classList.toggle(`${s.active}`)
    }
    
    return (
        <div className={s.header}>
            <div>
                <button className={s.switch_theme_btn} onClick={props.switchTheme}>
                    {props.theme === 'light' ? <div>&#9790;</div> : <div>&#9728;</div> }
                </button>
            </div>

            ~-~-~
            MICROBIUS
            ~-~-~

            <div className={s.profile_header} ref={props.profile_header} onClick={openBurger}>
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
})

export default connect(null, {logout})(Header)