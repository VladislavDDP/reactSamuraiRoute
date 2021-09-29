import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div></div>

            ~-~-~
            MICROBIUS
            ~-~-~

            <div>
                <div className={s.login}>
                    { props.isAuthorized ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
                <button onClick={props.logout}>logout</button>
            </div>
            
        </div>  
    )
}

export default connect(null, {logout})(Header)