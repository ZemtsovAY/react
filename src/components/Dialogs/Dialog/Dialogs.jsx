import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'
import DialogItem from "./DialogItem";
import Message from "../Message/Messages";
import NewMessage from "../Message/NewMessage";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =>  <DialogItem userId={d.userId} userName={d.userName} />);
    let messagesElements = props.state.messages.map(m =>  <Message message={m.message} messageId={m.messageId} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <NewMessage/>
                { messagesElements }

            </div>
        </div>
    )
}

export default Dialogs