import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    const likePost = (index) => {
        props.likePost(index)
    }

    let posts = props.posts.map((post, index) => (<Post key={post.id}
                                                        name={post.name} 
                                                        likePost={likePost} 
                                                        index={index} text={post.text} 
                                                        likes_count={post.likes_count}/>))
    
    const addPost = (value) => {
        props.addNewPost(value.postText)
    }

    return (
        <div>
            <ReduxAddPostForm onSubmit={addPost} />
            
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.add_post}>
                <Field className={s.input_post} name='postText'
                    component='input' placeholder='Type something...' />
                <button className={s.add_post_btn}>Add</button>
            </div>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({form: 'add-post-form'})(AddPostForm)

export default MyPosts