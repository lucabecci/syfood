import Express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieSession from "cookie-session";
import passport from "passport";

import IndexRouter from "./routes/index.routes";
import UserRouter from './routes/user.routes'
import Database from "./database/database";
import config from "./config/config";
class Server {
  private _app: Express.Application;
  constructor() {
    this._app = Express();

    this._confDatabase();
    this._confMiddlewares();
    this._confRoutes();
  }
  
  private async _confDatabase(): Promise<void> {
    await Database.connect();
  }

  private _confMiddlewares(): void {
    this._app.use(Express.json());
    this._app.use(Express.urlencoded({ extended: false }));
    this._app.use(
      cors({
        origin: config.CORS.ORIGIN,
        credentials: !config.CORS.CRED,
      })
    );
    this._app.use(morgan(config.NODE_ENV));

    this._app.use(
      cookieSession({
        name:"auth",
        keys: ["key1", "key2"],
        maxAge: (60 * 60 * 60)
      })
    )

    this._app.use(passport.initialize())
    this._app.use(passport.session())
  }

  private _confRoutes(): void {
    this._app.use("/", IndexRouter);
    this._app.use("/user", UserRouter)
  }

  public run(): void {
    this._app.listen(config.PORT, () => {
      console.log("Server on port:", config.PORT);
    });
  }
}

export default Server;
