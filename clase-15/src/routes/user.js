import { Router } from "express";
import { userModel } from "../models/user.js";

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.send({ resultado: 'success', valores: users })
    } catch (error) {
        res.send("Error en consulta a users, mensaje: ", error.message)
    }
})

userRouter.post('/', async (req, res) => {
    try {
        const { nombre, apellido, email, edad } = req.body

        console.log(nombre, apellido, email, edad)
        const resultado = await userModel.create({
            nombre,
            apellido,
            email,
            edad
        })
        res.send({ resultado: 'success', resultado: resultado })
    } catch (error) {
        res.send("Error en consulta a users, mensaje: ", error.message)
    }
})

export default userRouter 