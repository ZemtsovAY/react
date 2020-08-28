import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from 'axios'

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        return (<Users
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            pageSize = {this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            //setCurrentPage={this.props.setCurrentPage}

        />)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage))

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer