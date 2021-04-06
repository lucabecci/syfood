import Express, { Application } from "express";
import cors from 'cors'
import morgan from 'morgan'

class Server {
    private _app: Application
    
    constructor(){
        this._app = Express()
                
        this._initConf()
        this._initRoutes()
    }
    private _initConf(): void{
        this._app.use(Express.json())
        this._app.use(Express.urlencoded({extended: false}))
        this._app.use(cors())
        this._app.use(morgan("dev"))
    }

    private _initRoutes(): void{
        this._app.get('/', (_req: any, res: any) => {
            res.send('<h1>Syfood</h1>')
        })        
    }

    public run(): void {
        this._app.listen(8080, () => {
            console.log("Server on port:", 8080)
        })
    }
}

export default Server