import MyPosts from './MyPosts'
import { updatePostText, addNewPost, likePost } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addNewPost: addNewPost,
    updatePostText: updatePostText,
    likePost: likePost})(MyPosts)

export default MyPostsContainer