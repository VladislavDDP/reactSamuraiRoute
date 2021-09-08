import s from './Users.module.css'
import * as axios from 'axios'
import React from 'react'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(response => {
                 this.props.setUsers(response.data.items)
                })
    }

    setPage = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
             .then(response => {
                 this.props.setUsers(response.data.items)
                 this.props.setTotalPagesCount(response.data.totalCount - 14400)
             })
    }

    render() {

        const pagesNumbers = []
        const pages = Math.ceil(this.props.totalPagesCount / this.props.pageSize)
        for (let i = 1; i <= pages; i++) {
            pagesNumbers.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pagesNumbers.map(page => {
                            return <span key={page} className={this.props.currentPage === page && s.selectedPage}  
                                         onClick={() => this.setPage(page)}>{page}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u => { 
                        return <div key={u.id}>
                            <img src={u.photos.small != null ? u.photos.small : 'https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png'} className={s.profilePhoto} alt="" />
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
    
                            {u.followed
                                ? <button onClick={() => {this.props.unfollowUser(u.id)} }>Unfollow</button> 
                                : <button onClick={() => {this.props.followUser(u.id)} }>Follow</button>}
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Users