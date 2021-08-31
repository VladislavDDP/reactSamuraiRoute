import React from 'react'
import MyPosts from './MyPosts'
import { updatePostTextActionCreator, addNewPostActionCreator } from '../../../redux/profileReducer'

const MyPostsContainer = (props) => {

    const state = props.store.getState()

    const updatePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text))
    }
    
    const addPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }

    return (<MyPosts addNewPost={addPost}
                     updatePostText={updatePostText}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer