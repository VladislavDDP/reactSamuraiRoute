import { connect } from 'react-redux'
import { sendMessageActionCreator, setActiveChatWithUserActionCreator, updateMessageTextActionCreator } from '../../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        setActiveChatWithUser: (id) => {
            dispatch(setActiveChatWithUserActionCreator(id))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer