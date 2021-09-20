import s from './Settings.module.css'

const Settings = (props) => {
    return (
        <div className={s.settings}>
            <div>Your Settings</div>
            <br /> <br />
            <div>Choose theme: </div>
            <form action="">
                Light<input type="radio" name='theme' onClick={} />
                <br />
                Dark<input type="radio" name='theme' onClick={} />
            </form>
        </div>
    )
}

export default Settings