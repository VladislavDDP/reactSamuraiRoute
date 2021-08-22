import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div className={s.add_post}>
                <input className={s.input_post} type='text' placeholder='Type something...'/>
                <button className={s.add_post_btn}>Add</button>
            </div>
            <div className={s.posts}>
                <Post name='Vlad' text='Hello world' likes_count='4' />
                <Post name='Vlad' text='Let`s speak about react?' likes_count='1' />
                <Post name='Vlad' text='As for my plans for weekend...' likes_count='3' />
            </div>
        </div>
    )
}

export default MyPosts