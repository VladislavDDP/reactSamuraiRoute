import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addNewPost={props.addNewPost}
                     updatePostText={props.updatePostText} />
        </div>
    )
}

export default Profile