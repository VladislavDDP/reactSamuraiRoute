import { connect } from "react-redux"
import * as axios from 'axios'
import React from 'react'
import Users from "./Users"
import s from "./Users.module.css"
import preloader from "../../images/preloader.gif"
import {followUserAC, unfollowUserAC, setUsersAC, setCurrentPageAC, setTotalPagesCountAC, setIsFetchingAC} from './../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
             })
    }

    setPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
             .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalPagesCount(response.data.totalCount > 1000? 80 : 50)
                this.props.setIsFetching(false)
             })
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.isFetching ? <img className={s.preloader} src={preloader} alt="preloader"/> : null }
                </div>

                <Users  totalPagesCount={this.props.totalPagesCount}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    isFetching={this.props.isFetching}
                    currentPage={this.props.currentPage}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    setPage={this.setPage}  />   
            </div>
        )

            
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPagesCount: state.usersPage.totalPagesCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserAC(userId))
        },

        unfollowUser: (userId) => {
            dispatch(unfollowUserAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },

        setTotalPagesCount: (totalPagesCount) => {
            dispatch(setTotalPagesCountAC(totalPagesCount))
        },

        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)