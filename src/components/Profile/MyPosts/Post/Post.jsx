import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.post_avatar} src="https://avatars.githubusercontent.com/u/79578649?v=4" alt="avatar" />
            <div>
                <p>{ props.name }</p>   
                <p>{ props.text }</p>  
                <p>{ props.likes_count } like/-s </p>
            </div>
        </div>
    )
}

export default Post