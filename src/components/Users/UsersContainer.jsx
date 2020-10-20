import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, toggleIsFetching} from "../../redux/users-reducer";
import React from "react";
import {getUsers} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)

        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then((data) => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (<Users {...this.props}
            // users = {this.props.users}
            // follow = {this.props.follow}
            // unfollow = {this.props.unfollow}
            // pageSize = {this.props.pageSize}
            // totalUsersCount={this.props.totalUsersCount}
            // currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
            // setCurrentPage={this.props.setCurrentPage}

        />)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetching(isFetching))

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer