import MyPosts from './MyPosts'
import { addPost, likePost } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    likePost})(MyPosts)

export default MyPostsContainer