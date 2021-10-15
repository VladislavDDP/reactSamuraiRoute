import s from './Users.module.css'
import avatar from "../../images/samurai.jpg"
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    const pagesNumbers = []
    // const pages = Math.ceil(props.totalPagesCount / props.pageSize)
    const pages = 8
    for (let i = 1; i <= pages; i++) {
        pagesNumbers.push(i)
    }

    return (
        <div className={s.usersPage}>
            <div className={s.page_numbers}>
                {
                    pagesNumbers.map(page => {
                        return <span key={page} className={props.currentPage === page ? s.selectedPage : ''}  
                                        onClick={() => props.setPage(page)}>{page}</span>
                    })
                }
            </div>
            <br />
            <div className={s.users_table}>
            {
                props.users.map(u => { 
                    return <div className={s.user_intro} key={u.id}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : avatar} className={s.profilePhoto} alt="" />
                        </NavLink>
                        <div>{u.name}</div>
                        <div>{u.status || '----'}</div>
                        {u.followed
                            ? <button className={s.unfollow_btn} disabled={props.isFollowTimeOut.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)} }>Unfollow</button> 

                            : <button className={s.follow_btn} disabled={props.isFollowTimeOut.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)}}>Follow</button>}
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default Users
