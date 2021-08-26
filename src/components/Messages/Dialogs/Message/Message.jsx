import s from './../Dialogs.module.css'

const Message = (props) => {
    if (props.sender)
    return (
        <div className={`${s.messsage} ${s.fromFriend}`}>{props.text}</div>
    )
    else {
        return (
            <div className={`${s.messsage} ${s.fromMe}`}>{props.text}</div>
        )
    }

}

export default Message