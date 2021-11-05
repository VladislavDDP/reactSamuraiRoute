import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import React from 'react'

const Profile = React.memo((props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <hr />
            <MyPostsContainer />
        </div>
    )
})

export default Profile