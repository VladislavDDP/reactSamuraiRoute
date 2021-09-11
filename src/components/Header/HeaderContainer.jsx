import { connect } from "react-redux"
import Header from "./Header"
import { authUserProfile } from "../../redux/authReducer"
import axios from "axios"
import React from "react"

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(
            response => {
                const {id, email, login} = response.data.data
                if (!response.data.resultCode) {
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
    login: state.login
})

export default connect(mapStateToProps, {authUserProfile})(HeaderContainer)