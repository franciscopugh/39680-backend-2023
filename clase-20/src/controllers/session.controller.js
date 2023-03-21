//import {userModel} from '../models/userModel.js'
export const getSession = (req, res, next) => {

    if (req.session.login) { //Sesion activa va a los productos
        res.redirect('home', {
            'divMessage': "Hola"
        })
    } else { //No esta activa la sesion, va al login
        res.redirect('/', {

        })
    }

}

export const testLogin = (req, res, next) => {
    //Consultar si el usuario existe en la BDD
    const { email, password } = req.body
    console.log(email, password)
    try {
        if (email == "f@f.com" && password == "1234") {
            req.session.login = true
            return true
        } else {
            return false
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
            res.redirect("/")
        })
    }

}

export const home = (req, res, next) => {

    res.render('home', {

    })

}

export const register = async (req, res, next) => {
    const { first_name, last_name, email, age, password } = req.bod

    //Password deberia guardarse encriptada
    /*
    
    const user = await userModel.find() Buscar por email
    if(user) {
        res.redirect("/", {
            Indicar que el email ya esta registrado
        })
    } else {
        await userModel.addElement([user])
        res.redirect("/", {
            Indicar que el usuario se creo correctamente
        })
    }
    */
}