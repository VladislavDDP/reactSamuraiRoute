import Dialogs from "./Dialogs/Dialogs"
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={s.messages}>
            Your conversations
            <Dialogs users={props.dialogsPage.users} 
                     messages={props.dialogsPage.messages}
                     newMessageText={props.dialogsPage.newMessageText}
                     dispatch={props.dispatch} />
        </div>
    )
}

export default Messages