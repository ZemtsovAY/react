import React from "react";
import s from '../Dialogs.module.css'
import DialogItem from "./DialogItem";

import Message from "../Message/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem userId={d.userId} userName={d.userName}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} messageId={m.messageId}/>);

    let addNewMessageRef = React.createRef();

    let addMessage = () => {
        props.addNewMessage(addNewMessageRef.current.value)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={addNewMessageRef}/>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs