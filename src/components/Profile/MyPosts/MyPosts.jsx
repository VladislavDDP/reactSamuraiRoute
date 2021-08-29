import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { updatePostTextActionCreator, addNewPostActionCreator } from '../../../redux/state'

const MyPosts = (props) => {
    let posts = props.posts.map(post => (<Post name={post.name} text={post.text} likes_count={post.likes_count}/>))

    const updatePostText = (event) => {
        const text = event.target.value 
        props.dispatch(updatePostTextActionCreator(text))
    }
    
    const addPost = () => {
        props.dispatch(addNewPostActionCreator())
    }

    return (
        <div>
            <div className={s.add_post}>
                <input onChange={updatePostText}
                       value={props.newPostText} 
                       className={s.input_post} 
                       type='text' placeholder='Type something...'/>
                <button onClick={addPost} className={s.add_post_btn}>Add</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts