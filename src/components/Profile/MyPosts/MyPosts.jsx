import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let posts = [
        {name: 'Vlad', text: 'Hello world', likes_count: 4},
        {name: 'Vlad', text: 'Let`s speak about react?', likes_count: 1},
        {name: 'Vlad', text: 'As for my plans for weekend...', likes_count: 3},
    ]

    return (
        <div>
            <div className={s.add_post}>
                <input className={s.input_post} type='text' placeholder='Type something...'/>
                <button className={s.add_post_btn}>Add</button>
            </div>
            <div className={s.posts}>
                <Post name={posts[0].name} text={posts[0].text} likes_count={posts[0].likes_count} />
                <Post name={posts[1].name} text={posts[1].text} likes_count={posts[1].likes_count} />
                <Post name={posts[2].name} text={posts[2].text} likes_count={posts[2].likes_count} />
            </div>
        </div>
    )
}

export default MyPosts