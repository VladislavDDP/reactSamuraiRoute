import { connect } from "react-redux"
import React from 'react'
import Users from "./Users"
import Preloader from './Preloader'
import {followUser, unfollowUser, setUsers, setCurrentPage, setTotalPagesCount, setIsFetching, setFollowTimeOut} from './../../redux/usersReducer';
import { userAPI } from "../API/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            this.props.setIsFetching(false)
        })
    }

    setPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            this.props.setTotalPagesCount(response.totalCount > 1000? 80 : 50)
            this.props.setIsFetching(false)
        })
    }

    render() {
        return (
            <div>
                
                {this.props.isFetching ? <Preloader /> : null }
                

                <Users  totalPagesCount={this.props.totalPagesCount}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    isFetching={this.props.isFetching}
                    currentPage={this.props.currentPage}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    setPage={this.setPage}
                    isFollowTimeOut={this.props.isFollowTimeOut}
                    setFollowTimeOut={this.props.setFollowTimeOut}  />   
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
        isFetching: state.usersPage.isFetching,
        isFollowTimeOut: state.usersPage.isFollowTimeOut
    }
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalPagesCount,
    setIsFetching,
    setFollowTimeOut
})(UsersContainer)