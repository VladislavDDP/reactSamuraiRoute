import React from 'react'
import MyPosts from './MyPosts'
import { updatePostTextActionCreator, addNewPostActionCreator } from '../../../redux/profileReducer'
import StoreContext from './../../../StoreContext'

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                const state = store.getState().profilePage

                const updatePostText = (text) => { 
                    store.dispatch(updatePostTextActionCreator(text))
                }
                
                const addPost = () => {
                    store.dispatch(addNewPostActionCreator())
                }
                return (
                    <MyPosts addNewPost={addPost}
                        updatePostText={updatePostText}
                        posts={state.posts}
                        newPostText={state.newPostText} />
                )
            }
        }
            
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer