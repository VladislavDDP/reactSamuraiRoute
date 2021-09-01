import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPostsContainer />
        </div>
    )
}

export default Profile