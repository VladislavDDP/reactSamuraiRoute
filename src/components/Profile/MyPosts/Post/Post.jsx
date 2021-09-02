import s from './Post.module.css'

const Post = (props) => {
    const likePost = () => {
        props.likePost(props.index)
    }
    return (
        <div className={s.post}>
            <img className={s.post_avatar} src="https://avatars.githubusercontent.com/u/79578649?v=4" alt="avatar" />
            <div>
                <p className={s.author}>{ props.name }</p>
                <p className={s.post_text}>{ props.text }</p>  
                <p className={s.likes} onClick={likePost}>{ props.likes_count } &#9825; </p>
            </div>
        </div>
    )
}

export default Post