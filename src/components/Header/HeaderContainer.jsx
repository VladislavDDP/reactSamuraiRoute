import { connect } from "react-redux"
import Header from "./Header"
import { authUserProfile } from "../../redux/authReducer"
import React from "react"
import { loginAPI } from "../API/api"

class HeaderContainer extends React.Component {

    componentDidMount() {
        loginAPI.authMe().then(
            response => {
                const {id, email, login} = response.data
                if (!response.resultCode) {
                    this.props.authUserProfile(id, email, login)
                }
            }
        )
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login
})

export default connect(mapStateToProps, {authUserProfile})(HeaderContainer)