import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser(process.env.SIGNED_COOKIE)) // Puedo implementar cookies en mi app
app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

function auth(req, res, next) {
    console.log(req.session.email)
    if (req.session.email == "admin@admin.com") {
        return next()
    }
    return res.send("No tenes acceso a este contenido")

}

app.listen(4000, () => console.log("Server on port 4000"))

//COOKIES
app.get('/setCookie', (req, res) => {
    res.cookie('CookieCookie', 'Esto es una cookie', { maxAge: 30000, signed: true }).send('Cookie')
})

app.get('/getCookie', (req, res) => {
    console.log(req.session.email)
    res.send(req.signedCookies)
})

//SESSION

app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Has entrado ${req.session.counter} de veces
        `)
    } else {
        req.session.counter = 1
        res.send("Hola!")
    }
})

app.get('/login', (req, res) => {
    const { email, password } = req.body

    if (email == "admin@admin.com" && password == "1234") {
        req.session.email = email
        req.session.password = password

        return res.send("Login")
    }
    return res.send("Login fallido")
})

app.get('/admin', auth, (req, res) => {
    res.send("Sos el admin")
})

app.get('/logout', (req, res) => {
    req.session.destroy(() => {

        res.send('Salio!')

    })
})