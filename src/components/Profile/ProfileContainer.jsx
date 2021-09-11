import Profile from './Profile'
import React from 'react'
import axios from 'axios'
import { setUserProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(
                response => {
                    if (!response.data.resultCode) {
                        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                                .then(
                                    response => {
                                        this.props.setUserProfile(response.data)
                                    }
                                )
                    }
                }
            )
        } else {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                    .then(
                        response => {
                            this.props.setUserProfile(response.data)
                        }
                    )
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