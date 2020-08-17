import React from "react";
import style from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                console.log(response);
            })
    }
    onClickSetFollowed = () => {
        this.props.setFollowed(this.props.followed ? false : true)
    }
    render() {
        return (
            <div>
                <div className={style.usersItem}>
                    <div>
                        <div>photos</div>
                        <div>
                            <button onClick={this.onClickSetFollowed}>{this.props.followed ? 'unfollow' : 'follow'}</button>
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
}

export default Users;