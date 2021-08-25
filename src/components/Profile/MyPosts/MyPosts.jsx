import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = props.posts.map(post => (<Post name={post.name} text={post.text} likes_count={post.likes_count}/>))

    let newPostElement = React.createRef()
    const addPost = () => {
        const text = newPostElement.current.value
        alert(text)
    }
    
    return (
        <div>
            <div className={s.add_post}>
                <input ref={newPostElement} className={s.input_post} type='text' placeholder='Type something...'/>
                <button id='post_btn' onClick={addPost} className={s.add_post_btn}>Add</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts