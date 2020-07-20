import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts state={props.state} newPostMessageText={props.newPostMessageText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;