import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <Post name='Vlad' text='Hello world' likes_count='4' />
            <Post name='Vlad' text='Let`s speak about react?' likes_count='1' />
            <Post name='Vlad' text='As for my plans for weekend...' likes_count='3' />
        </div>
    )
}

export default MyPosts