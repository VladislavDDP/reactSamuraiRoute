import logo from '../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img class='logo' src={logo} alt="Logo" />
        </div>
    )
}

export default Header