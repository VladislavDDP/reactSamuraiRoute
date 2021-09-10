import s from './Users.module.css'
import avatar from "../../images/default_avatar.png"
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    const pagesNumbers = []
    const pages = Math.ceil(props.totalPagesCount / props.pageSize)
    for (let i = 1; i <= pages; i++) {
        pagesNumbers.push(i)
    }

    return (
        <div>
            <div>
                {
                    pagesNumbers.map(page => {
                        return <span key={page} className={props.currentPage === page && s.selectedPage}  
                                        onClick={() => props.setPage(page)}>{page}</span>
                    })
                }
            </div>
            {
                props.users.map(u => { 
                    return <div key={u.id}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : avatar} className={s.profilePhoto} alt="" />
                        </NavLink>
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