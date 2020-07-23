import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {

    _state: {

        dialogsPage: {
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
            ],

            newMessageText: "bla bla bla"
        },

        postsPage: {
            posts: [
                {message: 'Hi, how are you?', likesCount: '5'},
                {message: "It's my first post", likesCount: '23'}
            ],

            newPostMessageText: "Enter new message",
        }

    },
    _callSubscriber() {
        console.log("asdfasdf")
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)

    }
}


export default store