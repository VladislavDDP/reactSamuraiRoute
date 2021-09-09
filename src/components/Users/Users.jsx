import s from './Users.module.css'

const Users = (props) => {
    const pagesNumbers = []
    const pages = Math.ceil(props.totalPagesCount / props.pageSize)
    for (let i = 1; i <= pages; i++) {
        pagesNumbers.push(i)
    }

    return (
        <div>

                {
                    pagesNumbers.map(page => {
                        return <span key={page} className={props.currentPage === page && s.selectedPage}  
                                        onClick={() => props.setPage(page)}>{page}</span>
                    })
                }
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