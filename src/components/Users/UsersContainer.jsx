import { connect } from "react-redux"
import React from 'react'
import Users from "./Users"
import Preloader from './Preloader'
import {followUser, unfollowUser, setFollowTimeOut, getUsersThunkCreator} from './../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    setPage = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
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
    followUser, unfollowUser, setFollowTimeOut, getUsersThunkCreator})(UsersContainer)