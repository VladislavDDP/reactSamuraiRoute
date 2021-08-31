import DialogsContainer from "./Dialogs/DialogsContainer"
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={s.messages}>
            Your conversations
            <DialogsContainer store={props.store} />
        </div>
    )
}

export default Messages