import { connect } from "react-redux"
import Users from "./Users"
import {followUserActionCreator, unfollowUserActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalPagesCountActionCreator} from './../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPagesCount: state.usersPage.totalPagesCount,
        pageSize: state.usersPage.pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserActionCreator(userId))
        },

        unfollowUser: (userId) => {
            dispatch(unfollowUserActionCreator(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },

        setTotalPagesCount: (totalPagesCount) => {
            dispatch(setTotalPagesCountActionCreator(totalPagesCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer