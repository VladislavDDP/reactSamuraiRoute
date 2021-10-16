import s from './../Dialogs.module.css'

const Message = ({sender, text}) => {
    if (sender)
    return (
        <div className={`${s.messsage} ${s.fromFriend}`}>{text}</div>
    )
    else {
        return (
            <div className={`${s.messsage} ${s.fromMe}`}>{text}</div>
        )
    }

}

export default Message