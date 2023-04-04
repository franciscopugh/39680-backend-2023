import local from 'passport-local'
import passport from 'passport'
import GitHubStrategy from 'passport-github2'
import jwt from 'passport-jwt'

import { managerUser } from '../controllers/user.controller.js'
import { createHash, validatePassword } from '../utils/bcrypt.js'
import { generateToken } from "../utils/jwt.js";

//Passport se va a trabajar como u nmiddleware
const LocalStrategy = local.Strategy //Defino mi estrategia
const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt //Extractor ya se de headers o cookies, etc

const initializePassport = () => {

    const cookieExtractor = req => {
        console.log(req.cookies)
        //{} no hay cookies != esta cookie no existe
        //Si existen las cookies, asigno mi cookie en especifico sino asigno null
        const token = req.cookies ? req.cookies.jwtCookie : {}
        console.log(token)
        return token
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]), //El token se extrae desde las cookies
        secretOrKey: process.env.PRIVATE_KEY_JWT //Desencriptar
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }

    }))

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
                const accessToken = generateToken(userCreated)
                console.log(accessToken)
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
                const accessToken = generateToken(user)
                console.log(accessToken)
                return done(null, user)
            }

            return done(null, false) //Contraseña no valida

        } catch (error) {
            return done(error)
        }
    }))
    /*
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

    }))*/


    //Inicializar la session del user
    passport.serializeUser((user, done) => {
        if (Array.isArray(user)) {
            done(null, user[0]._id)
        } else {
            done(null, user._id)
        }

    })



    //Eliminar la session del user
    passport.deserializeUser(async (id, done) => {
        const user = managerUser.getElementById(id)
        done(null, user)
    })

}

export default initializePassport