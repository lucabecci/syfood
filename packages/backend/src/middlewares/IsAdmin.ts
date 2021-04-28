import { getModelForClass } from "@typegoose/typegoose";
import { NextFunction, Request, Response } from "express";
import User from "src/models/User";

class IsAdmin {
    private static user = getModelForClass(User)

    public static async isAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
        if(req.user){
            const usr = await this.user.findOne(req.user)

            if(usr?.admin){
                next()
            }else{
                res.status(401).json({
                    message: "Not a admin"
                })
            }
        }else{
            res.status(401).json({
                message: "Auth not valid"
            })
        }
    }
}

export default IsAdmin