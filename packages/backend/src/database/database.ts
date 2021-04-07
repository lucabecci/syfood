import mongoose, { ConnectOptions, Mongoose } from "mongoose";
class Database {
  private static _mongoose: Mongoose = mongoose;
  private static _conf: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  protected static async connect(): Promise<void> {
      let retries = 5
      while (retries) {
        try{
            await this._mongoose.connect("", this._conf)
            console.log("DB is connected")
            break;
          }
          catch(e){
              console.log(e)
              retries--
              console.log(`Retries left: ${retries}`)
              await new Promise((res) => setTimeout(res, 5000));
          }
      }
  }

}

export default Database