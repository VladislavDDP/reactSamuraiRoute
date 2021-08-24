import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts posts={props.posts} />
        </div>
    )
}

export default Profile