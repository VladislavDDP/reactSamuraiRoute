import preloader from '../../images/256x256.gif'
import s from './Users.module.css'

const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader