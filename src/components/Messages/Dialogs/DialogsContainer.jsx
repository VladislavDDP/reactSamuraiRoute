import { connect } from 'react-redux'
import { sendMessage, setActiveChatWithUser, updateMessageText } from '../../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {


    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps, {sendMessage, updateMessageText, setActiveChatWithUser})(Dialogs)