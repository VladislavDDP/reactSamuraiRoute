import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { Redirect } from 'react-router'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div></div>

            ~-~-~
            MICROBIUS
            ~-~-~

            <div className={s.profile_header}>
                <div className={s.login}>
                    { props.isAuthorized ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
                <button className={s.logout_btn} onClick={props.logout}>logout</button>
                { props.isAuth ? <Redirect to={'/login'} /> : '' }
            </div>
            
        </div>  
    )
}

export default connect(null, {logout})(Header)