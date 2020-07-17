let rerenderEntireTree = () => {
    console.log("asdfasdf")
}

let state = {

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

    newPostMessageText: "Enter new message"

}


export let addPost = (newPostMessage) => {
    let newPost = {
        message: newPostMessage,
        likesCount: 0

    }

    state.posts.push(newPost)
    rerenderEntireTree()
}

export let subscribe = (observer) => {rerenderEntireTree = observer}


export let updateNewPostText = (newText) => {
    state.newPostMessageText = newText
    rerenderEntireTree()
}

export default state