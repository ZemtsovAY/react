import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt={''} />
      </div>
      <div>
        ava + description
      </div>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;