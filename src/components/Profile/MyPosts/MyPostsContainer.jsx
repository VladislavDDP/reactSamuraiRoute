import MyPosts from './MyPosts'
import { updatePostTextActionCreator, addNewPostActionCreator, likePostActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text))
        },
        likePost: (index) => {
            dispatch(likePostActionCreator(index))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer