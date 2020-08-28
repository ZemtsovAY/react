import {addNewPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostMessageText: state.profilePage.newPostMessageText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => dispatch(UpdatePostTextActionCreator(text)),
        addPost: () => dispatch(addNewPostActionCreator())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;