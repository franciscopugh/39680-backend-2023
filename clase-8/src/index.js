import express from "express";
const app = express()
const PORT = 4000

app.use(express.json()) //Mi app va a entender JSON
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/user', (req, res) => {
    res.send("Hola desde users!")
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send("Hola desde create user!")
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.send("Hola desde user by id!")
})

app.delete('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.send("Hola desde delete user!")
})

app.put('/user/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("Hola desde update user!")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})