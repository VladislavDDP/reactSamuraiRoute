import { connect } from "react-redux"
import Header from "./Header"
import React from "react"
import { authAccount } from '../../redux/authReducer'
import { switchTheme } from "../../redux/appReducer"

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized,
    login: state.auth.login,
    theme: state.app.theme
})

export default connect(mapStateToProps, {authAccount, switchTheme})(HeaderContainer)