import { connect } from "react-redux"
import Header from "./Header"
import React from "react"
import { authAccount } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authAccount()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login
})

export default connect(mapStateToProps, {authAccount})(HeaderContainer)