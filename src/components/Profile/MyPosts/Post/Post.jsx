import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post}>
            <img className={s.post_avatar} src="https://avatars.githubusercontent.com/u/79578649?v=4" alt="avatar" />
            <p>My post</p>
        </div>
    )
}

export default Post