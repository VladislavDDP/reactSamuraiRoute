import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuthorized
})

export const RedirectLogin = (Component) => {
    class RedirectLoginComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login' />
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectLoginComponent)
}