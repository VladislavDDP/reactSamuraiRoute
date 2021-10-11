import React from "react"
import DialogsContainer from "./Dialogs/DialogsContainer"
import s from './Messages.module.css'

const Messages = React.memo(() => {
            
    return (
        <div className={s.messages}>
            Your conversations
            <DialogsContainer />
        </div>
    )
})

export default Messages