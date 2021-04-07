import { Router, IRouter } from "express";
import IndexController from "../controllers/index.controller";

class IndexRouter {
    private _router: IRouter 
    private _indexController: IndexController
    
    constructor(){
        this._router = Router()
        this._indexController = new IndexController
        
        this._conf()
    }

    private _conf(): void{
        this._router.get('/', this._indexController.index)
    }

    public instance(): IRouter {
        return this._router
    }   
}

export default new IndexRouter().instance()