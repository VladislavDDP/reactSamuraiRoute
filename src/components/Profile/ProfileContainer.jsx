import Profile from './Profile'
import React from 'react'
import { setUserProfile, setOwnProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { RedirectLogin } from '../hoc/RedirectLogin'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
            
        if (!userId) {
            this.props.setOwnProfile()
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
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})


export default compose(
    connect(mapStateToProps, { setUserProfile, setOwnProfile, getUserStatus, updateUserStatus }),
    withRouter,
    RedirectLogin
)(ProfileContainer)