import { connect } from "react-redux"
import Users from "./Users"
import {followUserActionCreator, unfollowUserActionCreator, setUsersActionCreator} from './../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            debugger
            dispatch(followUserActionCreator(userId))
        },

        unfollowUser: (userId) => {
            dispatch(unfollowUserActionCreator(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer