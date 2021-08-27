import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = props.posts.map(post => (<Post name={post.name} text={post.text} likes_count={post.likes_count}/>))

    const inputTextPost = React.createRef()
    const updatePostText = () => {
        const text = inputTextPost.current.value 
        props.updatePostText(text)
    }
    
    const addPost = () => {
        props.addNewPost()
    }

    return (
        <div>
            <div className={s.add_post}>
                <input ref={inputTextPost} 
                       onChange={updatePostText}
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