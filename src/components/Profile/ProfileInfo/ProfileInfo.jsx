import s from './ProfileInfo.module.css'
import profile_img from '../../../images/profile_default.png'

const ProfileInfo = (props) => {
    return (
        <div className={s.profile}>
            <img className={s.profile_img} alt='profile' src={profile_img} />
            <div className={s.profile_info}>
                <h3>Vladyslav Denisovich</h3>
                <hr />
                <ul>
                    <li>Work: web developer</li>
                    <li>Alternative: python repetitor</li>
                    <li>Study: university</li>
                    <li>Age: 19</li>
                    <li>City: Kyiv</li>
                </ul>
                <hr />
                <ul>
                    <li>Experience: 2 years</li>
                    <li>Langusage: english</li>
                    <li>GitHub: true</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo