import { connect } from 'react-redux'
import ProfileStatus from './ProfileStatus'

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
    }
}

const ProfileStatusContainer = connect(mapStateToProps, {})(ProfileStatus)

export default ProfileStatusContainer