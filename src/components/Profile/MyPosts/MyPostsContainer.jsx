import MyPosts from './MyPosts'
import { addNewPost, likePost } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addNewPost,
    likePost})(MyPosts)

export default MyPostsContainer