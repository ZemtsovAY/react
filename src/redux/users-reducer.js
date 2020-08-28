const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'



let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 41,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })


            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }

}

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId
})

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})


export default usersReducer