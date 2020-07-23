const ADD_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: '5'},
        {message: "It's my first post", likesCount: '23'}
    ],

    newPostMessageText: "Enter new message",

}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostMessageText,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostMessageText = action.newText
            return state
        default:
            return state
    }

}

export const addNewPostActionCreator = () => ({type: ADD_POST})
export const UpdatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer