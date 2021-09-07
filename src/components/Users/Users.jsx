import s from './Users.module.css'
import * as axios from 'axios'
import React from 'react'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items))
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Load users</button>
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