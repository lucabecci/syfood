import {IUserSchema} from '../models/User'

export interface SaveUserInput {
    email: string, 
    oauth: string,
    username: string,
    ubication: string  
}

export interface SaveUserReturn {
    success: boolean,
    user: IUserSchema | null
}

export interface GetUserByOauth {
    oauth: string
}

export interface GetUserInput { 
    _id: string  
}

export interface GetUserReturn {
    success: boolean,
    user: IUserSchema | null
}

export interface GetUsersReturn {
    success: boolean,
    users: IUserSchema[] | null
}