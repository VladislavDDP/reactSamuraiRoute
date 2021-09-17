import { connect } from "react-redux"
import React from 'react'
import Users from "./Users"
import Preloader from './Preloader'
import {follow, unfollow, setFollowTimeOut, getUsers} from './../../redux/usersReducer';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setPage = (page) => {
        this.props.getUsers(page, this.props.pageSize)
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
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
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
    follow, unfollow, setFollowTimeOut, getUsers})(UsersContainer)