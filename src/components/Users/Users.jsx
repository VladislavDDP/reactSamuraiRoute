import s from './Users.module.css'
import avatar from "../../images/default_avatar.png"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true}).then(
                                    response => {
                                        if (!response.data.resultCode) {
                                            props.unfollowUser(u.id)
                                        }
                                    }
                                )
                            } }>Unfollow</button> 
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true}).then(
                                    response => {
                                        if (!response.data.resultCode) {
                                            props.followUser(u.id)
                                        }
                                    }
                                )
                                }}>Follow</button>}
                    </div>
                })
            }
        </div>
    )
}

export default Users