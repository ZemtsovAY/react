import {connect} from "react-redux";
import Users from "./Users";
import {setFollowedAC} from "../../redux/users-reducer";


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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer