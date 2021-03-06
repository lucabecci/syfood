import { IRouter, Router } from "express";
import passport from "passport";
import UserController from "../controllers/user.controller";

class UserRuter {
    private _router: IRouter
    private _userController: UserController

    constructor(){
        this._router = Router()
        this._userController = new UserController

        this._conf()
    }

    private _conf(): void {
        this._router.get('/profile', this._userController.getProfile)
        this._router.get(
            '/login', 
            passport.authenticate("google", { scope: ["profile", "email"]})
            )

        this._router.get(
            "/callback",
            passport.authenticate(
                "google",
                { failureRedirect: "/failed"},
            ),
            this._userController.redirectUser
        )

        this._router.get('/all', this._userController.getAllUsers)
    }

    public instance(): IRouter {
        return this._router
    }
}

export default new UserRuter().instance()