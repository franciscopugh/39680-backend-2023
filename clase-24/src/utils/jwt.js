import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    /*
        1er: Objeto de asociacion del token
        2do: Clave privada de el cifrado
        3er: Tiempo de expiracion
    */
    const token = jwt.sign({ user }, process.env.PRIVATE_KEY_JWT, { expiresIn: '12h' })
    return token
}

export const authToken = (req, res, next) => {
    //Consulto el header 
    const authHeader = req.headers.authorization
    if (!authHeader) { //Entra aqui si: No inicio sesion o se vencio el token
        return res.status(401).send({ error: "Usuario no autenticado" })
    }

    const token = authHeader.split(' ')[1] //Sacar una palabra innecesaria del authHeader
    //Token existente
    jwt.sign(token, process.env.PRIVATE_KEY_JWT, (error, credentials) => {
        //Verificar si es un token valido
        if (error) {
            return res.status(403).send({ error: "Usuario no autorizado" })
        }
        //Token descrifrado correctamente
        req.user = credentials.user
        next()

    })

}