import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
}

export default Profile