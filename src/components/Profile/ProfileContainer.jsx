import Profile from './Profile'
import React from 'react'
import { setUserProfile, setOwnProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { RedirectLogin } from '../hoc/RedirectLogin'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
            
        if (!userId) {
            this.props.setOwnProfile()
        } else {
            this.props.setUserProfile(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const withRouterUserProfile = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, setOwnProfile })(RedirectLogin(withRouterUserProfile))