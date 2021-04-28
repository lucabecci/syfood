import { Request, Response } from "express";
import { GetUsersReturn } from "../interfaces/user.interfaces";
import User from "../models/User";
import UserService from "../services/user.service";

class UserController {
    public async getProfile(_req: Request, res: Response): Promise<Response>{
        try{
            const user = await UserService.getUserByOauth({oauth: ""})
            return res.status(200).json({
                ok: true,
                profile: user
            })
        }
        catch(e){
            console.log(e)
            return res.status(400).json({
                ok: false,
                profile: null
            })
        }
    }

    public async getAllUsers(_req: Request, res: Response): Promise<User[] | any>{
        try{
            const resp: GetUsersReturn = await UserService.getUsers()
            if(resp.success === false){
                return res.status(400).json({
                    ok: false,
                    message: "Error to get all users"
                })
            }

            if(resp.users!.length < 1) {
                return res.status(400).json({
                    ok: false,
                    message: "Please insert users"
                })
            }
            const users = resp.users
            return res.status(200).json({
                ok: true,
                users
            })
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                ok: false,
                message: e
            })
        }
    }
}

export default UserController