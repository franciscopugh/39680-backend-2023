export const getSession = (req, res) => {
    if (req.session.login) { //Si la sesion esta activa en la BDD
        res.redirect('/product', 200, {
            'message': "Bienvenido/a a mi tienda"
        })
    }
    //No esta activa la sesion
    res.redirect('/api/session/login', 500, {
        //Mensaje de logueo
    })
}

export const testLogin = async (req, res) => {

    try {
        if (!req.user) {
            return res.status(401).send({ status: "error", error: "Invalidate User" })
        }
        //Genero la session de mi usuario
        req.session.user = {
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            age: req.user.age,
            email: req.user.email
        }

        res.status(200).send({ status: "success", payload: req.user })

    } catch (error) {
        res.status(500).send.json({
            message: error.message
        })
    }
}

export const destroySession = (req, res) => {
    if (req.session.login) {
        req.session.destroy()
    }
    res.redirect('/product', 200, {
        'divMessage': "Hola"
    })
}