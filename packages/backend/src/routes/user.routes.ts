import { IRouter, Router } from "express";
import UserController from "src/controllers/user.controller";

class UserRuter {
    private _router: IRouter
    private _userController: UserController

    constructor(){
        this._router = Router()
        this._userController = new UserController

        this._conf()
    }

    private _conf(): void {
        this._router.get('/', this._userController.getProfile)
    }

    public instance(): IRouter {
        return this._router
    }
}

export default new UserRuter().instance()