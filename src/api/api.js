import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "a7902f3f-9511-4ae9-8b3d-db12e0a3f20a"
        }
    }
)
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const unSubscribe = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data)

}

export const subscribe = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data)

}