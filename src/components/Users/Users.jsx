import s from './Users.module.css'
import * as axios from 'axios'

const Users = (props) => {
    
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response.data.items) 
            props.setUsers(response.data.items)
        })
    }
    
    return (
        <div>
            {
                props.users.map(u => { 
                    return <div key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : 'https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png'} className={s.profilePhoto} alt="" />
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>

                        {u.followed
                            ? <button onClick={() => {props.unfollowUser(u.id)} }>Unfollow</button> 
                            : <button onClick={() => {props.followUser(u.id)} }>Follow</button>}
                    </div>
                })
            }
        </div>
    )
}

export default Users