import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import profile_img from '../../images/profile_default.png'

const ProfileInfo = (props) => {
    return (
        <div className={s.profile}>
            <h3 className={s.profile_h3}>Profile description</h3>
            <img className={s.profile_img} alt='profile' src={profile_img} />
            <div className={s.profile_info}>
                <h3>Vladyslav Denisovich</h3>
                <ul>
                    <li>Web developer</li>
                    <li>student of 3d course</li>
                    <li>React framework</li>
                    <li>Django & Flask</li>
                </ul>
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile