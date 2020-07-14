import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div>
            <NavLink activeClassName={s.activeLink} to={'/dialogs/' + props.userId}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem