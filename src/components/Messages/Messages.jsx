import React from "react"
import DialogsContainer from "./Dialogs/DialogsContainer"
import s from './Messages.module.css'

class Messages extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state 
    }
    
    render() {
        return (
            <div className={s.messages}>
                Your conversations
                <DialogsContainer />
            </div>
        )
    }
}

export default Messages