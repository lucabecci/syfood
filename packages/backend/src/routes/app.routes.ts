import { Router, IRouter } from "express";
import AppController from "../controllers/app.controller";

class AppRouter {
    private _router: IRouter 
    private _appController: AppController
    
    constructor(){
        this._router = Router()
        this._appController = new AppController
        this._conf()
    }

    private _conf(): void{
        this._router.get('/', this._appController.home)
    }

    public instance(): IRouter {
        return this._router
    }   
}

export default new AppRouter().instance()