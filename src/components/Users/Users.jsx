import s from './Users.module.css'

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => { 
                    return <div key={u.id}>
                        <img src={u.imageUrl} className={s.profilePhoto} alt="" />
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>

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