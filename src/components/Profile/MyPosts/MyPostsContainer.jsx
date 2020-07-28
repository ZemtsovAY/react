import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addNewPostActionCreator, UpdatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    let newPostMessageText = props.store.getState().profilePage.newPostMessageText

    let posts = props.store.getState().profilePage.posts

    let updatePostText = (text) => {
        props.store.dispatch(UpdatePostTextActionCreator(text))
    }

    let addPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }

    return (
        <MyPosts updatePostText={updatePostText} addPost={addPost} newPostMessageText={newPostMessageText}  posts={posts}/>
    )
}

export default MyPostsContainer;