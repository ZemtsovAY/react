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
            ]
        },

        posts: [
            {message: 'Hi, how are you?', likesCount: '5'},
            {message: "It's my first post", likesCount: '23'}
        ],

        newPostMessageText: "Enter new message",


    },
    _callSubscriber() {
        console.log("asdfasdf")
    },
    getState() { return this._state},

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        if (action.type === 'ADD-NEW-POST'){
            let newPost = {
                message: this._state.newPostMessageText,
                likesCount: 0

            }

            this._state.posts.push(newPost)
            this._callSubscriber(this.getState())
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.newPostMessageText = action.newText
            this._callSubscriber(this.getState())
        }
    }
}


export default store