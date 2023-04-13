import { findUsers, createUser } from "../services/UserServices.js";

export const getUsers = async (req, res) => {
    try {
        const users = await findUsers()
        res.status(200).send(users)

    } catch (error) {
        res.status(500).send(error)
    }

}

export const postUser = async (req, res) => {
    try {
        const { nombre, email, password } = req.body
        const newUser = createUser({ nombre, email, password })
        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).send('Ocurrio un error en postUser', error)
    }

}