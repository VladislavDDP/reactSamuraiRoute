import Profile from './Profile'
import React from 'react'
import { setUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { RedirectLogin } from '../hoc/RedirectLogin'
import { compose } from 'redux'
import { getProfile, getProfileStatus, getUserId } from '../selectors/profile-selectors'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
            
        if (!userId) {
            this.props.setUserProfile(this.props.userId)
            this.props.getUserStatus(this.props.userId)
        } else {
            this.props.setUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getProfileStatus(state),
    userId: getUserId(state)
})


export default compose(
    connect(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    RedirectLogin
)(ProfileContainer)