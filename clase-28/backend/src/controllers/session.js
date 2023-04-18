import { createUser, findUserByEmail } from "../services/UserServices.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import { validatePassword, createHash } from "../utils/bcrypt.js";

export const loginUser = async (req, res, next) => {
    try {
        passport.authenticate('jwt', { session: false }, async (err, user, info) => {
            if (err) {
                return res.status(401).send("Error en consulta de token")
            }

            if (!user) {
                //El token no existe, entonces consulto por el usuario
                const { email, password } = req.body
                const userBDD = await findUserByEmail(email)

                if (!userBDD) {
                    // UserBDD no encontrado en mi aplicacion
                    return res.status(401).send("User no encontrado")
                }

                if (!validatePassword(password, userBDD.password)) {
                    // Contraseña no es válida
                    return res.status(401).send("Contraseña no valida")
                }

                // Ya que el usuario es valido, genero un nuevo token
                const token = jwt.sign({ user: { id: userBDD._id } }, process.env.JWT_SECRET)
                res.cookie('jwt', token, { httpOnly: true })
                return res.status(200).json({ token })
            } else {
                //El token existe, asi que lo valido
                console.log("Pase?")
                const token = req.cookies.jwt;
                jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                    if (err) {
                        // Token no valido
                        return res.status(401).send("Credenciales no válidas")
                    } else {
                        // Token valido
                        req.user = user
                        next()
                    }
                })
            }

        })(req, res, next)
    } catch (error) {
        res.status(500).send(`Ocurrio un error en Session, ${error}`)
    }
}
export const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body
        const userBDD = await findUserByEmail(email)

        if (userBDD) {
            res.status(401).send("Usuario ya registrado")
        } else {
            const hashPassword = createHash(password)
            const newUser = await createUser({ first_name, last_name, email, age, password: hashPassword })
            console.log(newUser)
            const token = jwt.sign({ user: { id: newUser._id } }, process.env.JWT_SECRET);
            res.cookie('jwt', token, { httpOnly: true });
            res.status(201).json({ token });
        }


    } catch (error) {
        res.status(500).send(`Ocurrio un error en Registro User, ${error}`)
    }

}