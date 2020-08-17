const SET_USERS = 'SET_USERS'
const SET_FOLLOWED = 'SET_FOLLOWED'

let initialState = {
    users: [],
    followed: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_FOLLOWED:
            return {
                ...state,
                followed: action.followed
            }
        default:
            return state
    }

}

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})

export const setFollowedAC = (followed) => ({
    type: SET_FOLLOWED,
    followed: followed
})


export default usersReducer