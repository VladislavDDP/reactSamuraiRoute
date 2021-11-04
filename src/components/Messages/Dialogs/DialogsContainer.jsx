import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendMessageToUser, setActiveChatWithUser } from '../../../redux/dialogsReducer'
import { RedirectLogin } from '../../hoc/RedirectLogin'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
    return {
        users: state.dialogsPage.users,
        activeId: state.dialogsPage.activeId
    }
}

export default compose(
    connect(mapStateToProps, {sendMessageToUser, setActiveChatWithUser}),
    RedirectLogin

)(Dialogs)