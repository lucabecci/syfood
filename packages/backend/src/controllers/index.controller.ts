import { Response, Request } from "express";

class IndexController{
    public index(_req: Request, res: Response): Response {
        return res.status(200).json({
            ok: true,
            message: "Hello World of Syfood"
        })
    }
}


export default IndexController