import { setStatus } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import ProfileStatus from './ProfileStatus'

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
    }
}

const ProfileStatusContainer = connect(mapStateToProps, {
    setStatus
})(ProfileStatus)

export default ProfileStatusContainer