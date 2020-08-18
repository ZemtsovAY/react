import {connect} from "react-redux";
import Users from "./Users";
import {setFollowedAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from 'axios'

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        // axios.get('https://social-network.samuraijs.com/api/1.0/users')
        //     .then((response) => {
        //         console.log(response);
        //     })
    }
    render(){
        return (<Users
            followed={this.props.followed}
            setFollowed = {this.props.setFollowed}

        />)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followed: state.usersPage.followed
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFollowed: (followed) => dispatch(setFollowedAC(followed))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer