import Profile from './Profile'
import React from 'react'
import { setUserProfile, setOwnProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { RedirectLogin } from '../hoc/RedirectLogin'
import { compose } from 'redux'

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


export default compose(
    connect(mapStateToProps, { setUserProfile, setOwnProfile }),
    withRouter,
    RedirectLogin
)(ProfileContainer)