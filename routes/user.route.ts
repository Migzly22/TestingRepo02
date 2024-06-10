import express, { Express, Request, Response, Application, Router } from "express";
import UserController from "../controllers/user.controller";

const UserRoute:Router = Router()

type RouteConfig = {
    method: 'get' | 'post' | 'put' | 'delete'
    path: string;
    handler: keyof typeof UserController;
};

// const router = Router();
const routesss:RouteConfig[] = [
    {
        method : "get",
        path : "/",
        handler : "getUsers"
    },
    {
        method : "post",
        path : "/",
        handler : "addUsers"
    },
    {
        method : "put",
        path : "/",
        handler : "updateUser"
    },
    {
        method : "delete",
        path : "/",
        handler : "deleteUsers"
    },
]
routesss.forEach(route =>{
    UserRoute[route.method](route.path, (req: Request, res: Response) => {
        const handler = UserController[route.handler] as (req: Request, res: Response) => Promise<void>;
        handler(req, res);
    })
})
// UserRoute.get("/", UserController["getUsers"]);
// UserRoute.post("/", UserController.addUsers);
// UserRoute.put("/", UserController.updateUser);
// UserRoute.delete("/", UserController.deleteUsers);


export default UserRoute;