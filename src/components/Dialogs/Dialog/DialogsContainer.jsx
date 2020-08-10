import React from "react";
import {addNewMessageAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     let state = props.store.getState()
//     let addNewMessage = (text) => {
//         props.store.dispatch(addNewMessageActionCreator(7, text))
//     };
//
//     return (
//         <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addNewMessage={addNewMessage} />
//     )
// }
//
// export default DialogsContainer

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (textMessage) => dispatch(addNewMessageAC(7, textMessage))
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer