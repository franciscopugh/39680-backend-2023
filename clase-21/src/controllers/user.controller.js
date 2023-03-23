import { getManagerUsers } from "../dao/daoManager.js";
import { createHash } from "../utils/bcrypt.js";

const data = await getManagerUsers()
const managerUser = new data.ManagerUserMongoDB

export const createUser = async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body

    try {
        const user = await managerUser.getElementByEmail(email)
        if (user) {
            return res.status(200).json({
                message: "Usuario existente"
            })
        }
        const passwordHash = createHash(password)
        console.log(passwordHash)
        const userCreated = await managerUser.addElements([{
            first_name: first_name,
            last_name: last_name,
            email: email,
            age: age,
            password: passwordHash
        }])

        return res.status(200).json({
            message: userCreated
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
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