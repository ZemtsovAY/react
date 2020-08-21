import React from "react";
import style from './Users.module.css'
import userPhoto from '../../../src/assets/images/user.png'


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }


    return (
        <div>
            <div>{pages.map(p => <span className={props.currentPage === p && style.selectedPage}
                                       onClick={() => props.onPageChanged(p)}>{p}</span>)}</div>
            {
                props.users.map(
                    user =>
                        <div className={style.usersItem} key={user.id}>
                            <div>
                                <div>
                                    <img className={style.userPhoto} src={ user.photos.small != null ? "user.photos.small" : userPhoto} alt="photo"/>
                                </div>
                                <div> {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>
                                        Unfollow
                                    </button> :
                                    <button
                                        onClick={() => props.follow(user.id)}>Follow
                                    </button>
                                }
                                </div>
                            </div>
                            <div className={style.userInfo}>
                                <div>mame: {user.name}</div>
                                <div>status: {user.status}</div>
                            </div>
                        </div>
                )
            }
        </div>
    )

}

export default Users;