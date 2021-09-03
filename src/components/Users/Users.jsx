import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {id: 1, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
                    name: 'Kate', status: 'Like beautiful bags', location: {country: 'Ukraine', city: 'Kyiv'}, followed: false},
                {id: 2, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
                    name: 'Nikita', status: 'Study a lot', location: {country: 'Ukraine', city: 'Kyiv'}, followed: true},
                {id: 3, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
                    name: 'Oleg', status: 'Ecology is important thing', location: {country: 'Ukraine', city: 'Kyiv'}, followed: false},
                {id: 4, imageUrl: 'https://cdn.mos.cms.futurecdn.net/wmyMhE8TuJnBRVW7D5sJVn-1200-80.jpg',
                    name: 'Nazar', status: 'Python is cool', location: {country: 'Ukraine', city: 'Kyiv'}, followed: false},
            ]
        )
    }
    
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