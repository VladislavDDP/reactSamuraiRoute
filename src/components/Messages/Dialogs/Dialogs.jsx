import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={`${s.user} ${s.active}`}>Vlad</div>
                <div className={s.user}>Victor</div>
                <div className={s.user}>Maks</div>
            </div>
            <div className={s.messsages}>
                <div className={s.messsage}>Hello</div>
                <div className={s.messsage}>How are you?</div>
                <div className={s.messsage}>and you?</div>
            </div>
        </div>
    )
}

export default Dialogs