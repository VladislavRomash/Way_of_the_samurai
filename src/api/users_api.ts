import axios from 'axios';
import {GetResponse, UsersApi} from './apiType';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const users_api = {
    async getUsers() {
        const response = await instance.get<GetResponse<UsersApi[]>>('users')
        return response.data
    }
}