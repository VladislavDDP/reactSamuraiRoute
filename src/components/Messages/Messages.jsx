import Dialogs from "./Dialogs/Dialogs"
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={s.messages}>
            Your conversations
            <Dialogs users={props.dialogs.users} 
                     messages={props.dialogs.messages}
                     sendMessage={props.sendMessage} />
        </div>
    )
}

export default Messages