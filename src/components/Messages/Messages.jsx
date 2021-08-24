import Dialogs from "./Dialogs/Dialogs"
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={s.messages}>
            Your conversations
            <Dialogs users={props.users} messages={props.messages} />
        </div>
    )
}

export default Messages