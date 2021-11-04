import Message from "./Message/Message"

const ExactMessages = (props) => {
    debugger
    const messages = props.users[props.id].messages.map(message => (
        <Message key={message.id} text={message.text} sender={message.sender} />))

    return (
        <div>
            {messages}
        </div>
    )
}


export default ExactMessages 