import express,{ Express, Request, Response } from "express";
import Users from "../models/user.model";

export default class UserController{
    static async getUsers(req: Request, res: Response){
        try {
            console.log(123123)
            const response = await Users.findAll()
            res.status(400).json(response)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    static async addUsers(req: Request, res: Response){
        try {
            const {body} = req
            const response = await Users.create(body)
            res.status(400).json(response)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    static async updateUser(req: Request, res: Response){
        try {
            res.status(200).json("Put User")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async deleteUsers(req: Request, res: Response){
        try {
            res.status(200).json("Delete User")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}