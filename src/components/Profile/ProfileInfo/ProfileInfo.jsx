import s from './ProfileInfo.module.css'
import profile_img from '../../../images/profile_default.png'
import Preloader from '../../Users/Preloader'
import ProfileStatusContainer from './ProfileStatusContainer'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <img src={props.profile.photos.large || profile_img} className={s.profile_img} alt="profile_image" />
            <div className={s.profile_info}>
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
                <ProfileStatusContainer />
                <hr />
                <ul>
                    <li>Work: {props.profile.lookingForAJobDescription || '-'}</li>
                </ul>
                <hr />
                <ul>
                    <li>Instagram: {props.profile.contacts.instagram || '-'}</li>
                    <li>GitHub: {props.profile.contacts.github || '-'}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo