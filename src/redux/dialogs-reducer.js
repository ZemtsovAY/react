const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

let internalState = {
    dialogs: [
        {userId: 1, userName: 'Dimych'},
        {userId: 2, userName: 'Sveta'},
        {userId: 3, userName: 'Kostya'},
        {userId: 4, userName: 'Pasha'},
        {userId: 5, userName: 'Petya'},
        {userId: 6, userName: 'Igor'},
    ],

    messages: [
        {messageId: 1, message: 'hello'},
        {messageId: 2, message: 'How are yoy'},
        {messageId: 3, message: 'bla'},
        {messageId: 4, message: 'asdfasdf'},
        {messageId: 5, message: 'asdfasdfasdf asdf'},
        {messageId: 6, message: 'Iasdf'}
    ]
}

const dialogsReducer = (state=internalState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                messageId: action.messageId,
                message: action.message
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }

}

export const addNewMessageActionCreator = (messageId, message) => ({
    type: ADD_NEW_MESSAGE,
    messageId: messageId,
    message: message
})


export default dialogsReducer