import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <hr />
            <MyPostsContainer />
        </div>
    )
}

export default Profile