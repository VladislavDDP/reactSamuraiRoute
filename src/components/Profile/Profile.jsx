import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

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