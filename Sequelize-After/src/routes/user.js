import { Router } from "express";
import { User } from "../models/user.js";

const routerUser = Router()

routerUser.get("/", async (req, res) => {
    try {
        const users = await User.findAll()
        res.send({ mensaje: users })
    } catch (error) {
        res.send(error)
    }
})

routerUser.post("/", async (req, res) => {
    const { nombre, apellido, email } = req.body
    try {
        const user = await User.create({ nombre, apellido, email })
        res.send({ mensaje: user })
    } catch (error) {
        res.send(error)
    }
})

export default routerUser
