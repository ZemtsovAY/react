const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

const dialogsReducer = (state, action) => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage = {
            messageId: action.messageId,
            message: action.message
        }
        state.messages.push(newMessage)
    }

    return state
}
export const addNewMessageActionCreator = (messageId, message) => ({
    type: ADD_NEW_MESSAGE,
    messageId: messageId,
    message: message
})


export default dialogsReducer