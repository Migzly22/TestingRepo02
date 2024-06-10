import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import RouterMiddleWare from "./middleware/middleware";
import UserRoute from "./routes/user.route";


const port: number = 5003
const app:Application = express();

const start = async (app:Application) => {
    app.use(express.json())
    app.get("/", (req: Request, res: Response)=>{
        try {
            res.status(200).json("Rest API SERVER READY")
        } catch (error) {
            res.status(500).json(error)
        }
    })
    //app.use(RouterMiddleWare.routeMiddleWare)
    app.use("/users",UserRoute)

    app.listen(port,()=>{
        console.log(`REST API SERVER READY AT http:localhost:${port}`);
    })
}

start(app)