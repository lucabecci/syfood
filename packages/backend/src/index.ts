import Server from "./app"


class Main {
    public static run(){
        const server = new Server
        try{
            server.run()
        }
        catch(e){
            console.log(e)
            process.exit(0)
        }
    }
} 

Main.run()