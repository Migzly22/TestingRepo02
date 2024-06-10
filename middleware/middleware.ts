import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config()


export default class RouterMiddleWare{
    static routeMiddleWare(req : Request, res : Response, next : NextFunction){
        const bearerToken:string[] = (req.headers.authorization || '').split(' ')
        const key = process.env.SECRET_KEY || ""
        if(bearerToken && bearerToken[0] === "Bearer"){
            jwt.verify(bearerToken[1], key ,(err, decode)=>{
                if(err){
                    console.log("Access Denied")
                }else{
                    console.log("Access Granted")
                    return next()
                }
            })
        }
    }
}