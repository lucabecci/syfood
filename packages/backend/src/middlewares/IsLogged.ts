import { NextFunction, Request, Response } from "express";

class IsLogged {
    public static logged(req: Request, res: Response, next: NextFunction): void{
        if( req.user ){
            next()
        } else {
            res.status(401).json({
                message: "Auth not valid"
            })
        }
    }  
}

export default IsLogged