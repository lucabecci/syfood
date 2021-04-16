import { Request, Response } from "express";
import UserService from "src/services/user.service";

class UserController {
    private _userService: UserService

    constructor(){
        this._userService = new UserService()
    }

    public async getProfile(req: Request, res: Response): Promise<Response>{
        try{
            const user = await this._userService.getUserByOauth({oauth: ""})
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
}

export default UserController