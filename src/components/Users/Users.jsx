import React from "react";
import style from './Users.module.css'


const Users = (props) => {
    let onClickSetFollowed = () => {
        props.setFollowed(props.followed ? false : true)
    }
    return (
            <div>
                <div className={style.usersItem}>
                    <div>
                        <div>photos</div>
                        <div>
                            <button onClick={onClickSetFollowed}>{props.followed ? 'unfollow' : 'follow'}</button>
                        </div>
                    </div>
                    <div className={style.userInfo}>
                        <div>status</div>
                        <div>1</div>
                    </div>
                </div>
            </div>
        )
}

export default Users;