import local from 'passport-local'
import passport from 'passport'
import GitHubStrategy from 'passport-github2'
import { managerUser } from '../controllers/user.controller.js'
import { createHash, validatePassword } from '../utils/bcrypt.js'

//Passport se va a trabajar como u nmiddleware
const LocalStrategy = local.Strategy //Defino mi estrategia

const initializePassport = () => {
    //Definir donde se aplican mis estrategias
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
            const { first_name, last_name, email, age } = req.body
            try {
                const user = await managerUser.getElementByEmail(username)
                if (user) {
                    return done(null, false)
                }
                const passwordHash = createHash(password)

                const userCreated = await managerUser.addElements([{
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    age: age,
                    password: passwordHash
                }])
                console.log(userCreated)
                return done(null, userCreated)
            } catch (error) {
                return done(error)
            }
        }))


    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {

        try {
            const user = await managerUser.getElementByEmail(username)

            if (!user) { //Usuario no encontrado
                return done(null, false)
            }
            if (validatePassword(password, user.password)) { //Usuario y contraseña validos
                return done(null, user)
            }

            return done(null, false) //Contraseña no valida

        } catch (error) {
            return done(error)
        }
    }))

    passport.use('github', new GitHubStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL

    }, async (accessToken, refreshToken, profile, done) => {

        try {
            console.log(accessToken)
            const user = await managerUser.getElementByEmail(profile._json.email)
            if (user) { //Si existe user en la bdd
                done(null, user)
            } else {
                const userCreated = await managerUser.addElements([{
                    first_name: profile._json.name,
                    last_name: ' ', //Por que github no posee nombre y apellido
                    email: profile._json.email,
                    age: 20, //Github no define la edad
                    password: ' ' //No puedo asignar una contraseña por que github ya me ofrece una
                }])
                done(null, userCreated)
            }

        } catch (error) {
            return done(error)
        }

    }))


    //Inicializar la session del user
    passport.serializeUser((user, done) => {
        console.log(user)
        done(null, user._id)
    })

    //Eliminar la session del user
    passport.deserializeUser(async (id, done) => {
        const user = managerUser.getElementById(id)
        done(null, user)
    })

}

export default initializePassport