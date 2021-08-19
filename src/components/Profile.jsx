import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <h3>Profile description</h3>
            <img src="https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg" />
            <div className={s.profile_info}>
                <h3>Vladyslav Denisovich</h3>
                <ul>
                    <li>Web developer</li>
                    <li>student of 3d course</li>
                    <li>React framework</li>
                    <li>Django & Flask</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile