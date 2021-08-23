import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import profile_img from '../../images/profile_default.png'

const ProfileInfo = (props) => {
    return (
        <div className={s.profile}>
            <img className={s.profile_img} alt='profile' src={profile_img} />
            <div className={s.profile_info}>
                <h3>Vladyslav Denisovich</h3>
                <hr />
                <ul>
                    <li>Work: web developer</li>
                    <li>Study: university</li>
                    <li>Age: 19</li>
                    <li>City: Kyiv</li>
                </ul>
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts />
        </div>
    )
}

export default Profile