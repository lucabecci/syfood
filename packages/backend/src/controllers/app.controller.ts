import { Request, Response } from "express";

class AppController {
    public home(_req: Request, res: Response): Response {
        return res.status(200).json({
            ok: true,
            message: "Home Page"
        })
    }
}

export default AppController