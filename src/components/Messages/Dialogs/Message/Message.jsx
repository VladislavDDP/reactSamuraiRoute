import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.messsage}>{props.text}</div>
    )
}

export default Message