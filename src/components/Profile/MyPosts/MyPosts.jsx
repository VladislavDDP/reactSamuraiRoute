import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let posts = [
        {name: 'Vlad', text: 'Hello world', likes_count: 4},
        {name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1},
        {name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3},
    ]

    let postsElements = posts
                    .map(post => (<Post name={post.name} text={post.text} likes_count={post.likes_count}/>))

    return (
        <div>
            <div className={s.add_post}>
                <input className={s.input_post} type='text' placeholder='Type something...'/>
                <button className={s.add_post_btn}>Add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts