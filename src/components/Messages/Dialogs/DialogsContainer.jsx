import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendMessage, setActiveChatWithUser } from '../../../redux/dialogsReducer'
import { RedirectLogin } from '../../hoc/RedirectLogin'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, setActiveChatWithUser}),
    RedirectLogin

)(Dialogs)