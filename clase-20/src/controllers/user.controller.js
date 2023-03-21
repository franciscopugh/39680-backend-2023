import { getManagerUsers } from "../dao/daoManager.js";

const data = await getManagerUsers()
const managerUser = new data.ManagerUserMongoDB

export const createUser = async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body

    try {
        const user = await managerUser.getElementByEmail(email)
        if (user) {
            res.redirect("/api/users/login", {
                //Indicar que el email ya esta registrado
            })
        }
        await managerUser.addElements([{ first_name, last_name, email, age, password }])

        res.redirect("/api/users/login", {
            // Indicar que el usuario se creo correctamente
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}