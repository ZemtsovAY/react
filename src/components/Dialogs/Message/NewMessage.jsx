import React from "react";
import {addNewMessageActionCreator} from "../../../redux/dialogs-reducer";

const NewMessage = (props) => {
    let addNewMessageRef = React.createRef();
    const addNewMessage = (e) => {props.dispatch(addNewMessageActionCreator(7, addNewMessageRef.current.value ))};
    return (
        <div>
            <textarea ref={addNewMessageRef} />
            <div>
                <button onClick={() => addNewMessage()}>Send</button>
            </div>
        </div>
    )
}

export default NewMessage;