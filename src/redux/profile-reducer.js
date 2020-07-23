const ADD_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            message: state.newPostMessageText,
            likesCount: 0
        }
        state.posts.push(newPost)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostMessageText = action.newText
    }

    return state
}

export const addNewPostActionCreator = () => ({type: ADD_POST})
export const UpdatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer