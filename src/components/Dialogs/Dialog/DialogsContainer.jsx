import React from "react";
import {addNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()
    let addNewMessage = (text) => {
        props.store.dispatch(addNewMessageActionCreator(7, text))
    };

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addNewMessage={addNewMessage} />
    )
}

export default DialogsContainer