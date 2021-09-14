import Profile from './Profile'
import React from 'react'
import { setUserProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { profileAPI } from '../API/api'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            
            profileAPI.setMyProfile().then(
                response => {
                    if (!response.resultCode) {
                        profileAPI.setUserProfile(response.data.id)
                            .then(
                                response => {
                                    this.props.setUserProfile(response)
                                }
                            )
                    }
                }
            )
            
        } else {
            
            profileAPI.setUserProfile(userId).then(response => this.props.setUserProfile(response))
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

export default connect(mapStateToProps, { setUserProfile })(withRouterUserProfile)