export const getSession = (req, res, next) => {

    if (req.session.login) { //Sesion activa va a los productos
        res.redirect('/product', {
            'divMessage': "Hola"
        })
    } else { //No esta activa la sesion, va al login
        res.redirect('/api/users/login', {

        })
    }

}

export const testLogin = (req, res, next) => {
    //Consultar si el usuario existe en la BDD
    const { email, password } = req.body

    try {
        if (email == "f@f.com" && password == "1234") {
            req.session.login = true
            res.redirect("/product")
        } else {
            res.redirect("/api/users/login")
        }


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

export const destroySession = (req, res, next) => {

    if (req.session.login) {
        req.session.destroy(() => {
            res.redirect("/api/users/login")
        })
    }

}

