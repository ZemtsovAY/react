import {addNewMessageAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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