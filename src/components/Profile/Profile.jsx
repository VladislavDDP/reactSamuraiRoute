import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.profile}>
            <h3 className={s.profile_h3}>Profile description</h3>
            <img className={s.profile_img} alt='profile' src="https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg" />
            <div className={s.profile_info}>
                <h3>Vladyslav Denisovich</h3>
                <ul>
                    <li>Web developer</li>
                    <li>student of 3d course</li>
                    <li>React framework</li>
                    <li>Django & Flask</li>
                </ul>
            </div>
            <div className={s.add_post}>
                <input className={s.input_post} type='text' placeholder='Type something...'/>
                <button className={s.add_post_btn}>Add</button>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile