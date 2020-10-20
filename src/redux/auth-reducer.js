const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


let initialState = {
    userID: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.authUserData,
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserData = (userID, login, email) => ({
    type: SET_AUTH_USER_DATA,
    authUserData: {userID, login, email}
})



export default authReducer