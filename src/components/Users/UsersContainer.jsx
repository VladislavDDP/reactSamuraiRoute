import { connect } from "react-redux"
import React from 'react'
import Users from "./Users"
import Preloader from './Preloader'
import {follow, unfollow, setFollowTimeOut, getUsers} from './../../redux/usersReducer';
import { compose } from "redux";
import { RedirectLogin } from "../hoc/RedirectLogin";
import { getCurrentPage, getIsFetching, getIsFollowTimeOut, getPageSize, getStateUsers, getTotalPagesCount } from "../selectors/users-selectors";

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
        users: getStateUsers(state),
        currentPage: getCurrentPage(state),
        totalPagesCount: getTotalPagesCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        isFollowTimeOut: getIsFollowTimeOut(state) 
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setFollowTimeOut, getUsers}),
    RedirectLogin
)(UsersContainer)