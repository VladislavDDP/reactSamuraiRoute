import logo from '../images/logo.png'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt="Logo" />
        </div>
    )
}

export default Header