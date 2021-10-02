import s from './Settings.module.css'

const Settings = (props) => {

    const changeLight = () => {
        console.log('light mode')
    }

    
    const changeDark = () => {
        console.log('dark mode')
    }

    return (
        <div className={s.settings}>
            <div>Your Settings</div>
            <br /> <br />
            <div>Choose theme: </div>
            <form action="">
                <br />
                Light<input type="radio" name='theme' onClick={changeLight} />
                Dark<input type="radio" name='theme' onClick={changeDark} checked />
            </form>
        </div>
    )
}

export default Settings