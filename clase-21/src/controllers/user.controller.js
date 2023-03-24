import { getManagerUsers } from "../dao/daoManager.js";
import { createHash } from "../utils/bcrypt.js";

const data = await getManagerUsers()
export const managerUser = new data.ManagerUserMongoDB

export const createUser = (req, res) => {
    res.send({ status: "success", message: "User created " })
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await managerUser.getElementById(id)
        if (user) {
            return res.status(200).json({
                message: user
            })
        }
        return res.status(200).json({
            message: "Usuario no encontrado"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getUserByEmail = async (email) => {
    try {
        const user = await managerUser.getElementByEmail(email)
        if (user) {
            return user
        }
        return "Usuario no encontrado"

    } catch (error) {
        return error
    }
}