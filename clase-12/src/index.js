import express from "express";
import routerProd from './routes/product.js'
import {__dirname} from './path.js'
import multer from 'multer'
import {engine} from 'express-handlebars'
import * as path from 'path'
import routerSocket from "./routes/socket.js";
import { Server } from "socket.io";


//import {create} from 'express-handlebars' Servers mas complejos
//const upload = multer({dest:'src/public/img'}) Imagenes sin formato

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/public/img')
  },
  filename: (req,file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`)
  }
})

const upload= multer({storage: storage})

const app = express()
const PORT = 4000 

const server = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})

const io = new Server(server);

//Middlewares
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))
app.engine("handlebars", engine()) //Config de hbs
app.set("view engine", "handlebars") //Defino mis vistas
app.set("views", path.resolve(__dirname, "./views")) //`${__dirname}/views`

//Routes
app.use('/', express.static(__dirname + '/public'))
app.use('/api/product', routerProd)
app.use('/', routerSocket)

app.post('/upload',upload.single('product'), (req,res) => {
  console.log(req.file)
  console.log(req.body)
  //req.body() no tiene la info del archivo
  res.send("Imagen cargada")
})

const mensajes = []
io.on("connection", (socket) => {
  console.log("Cliente conectado")
  socket.on("mensaje", info => {
    console.log(info)
    mensajes.push(info)
    io.emit("mensajeLogs", mensajes)
  })
})

/*
app.get('/', (req,res) => {

  const user = {
    nombre: "Seba",
    email: "seba@seba.com",
    rol:"Tutor"
  }
  const cursos = [
    {numComision: 44555, dias:"Lunes y Miercoles", horario:'20:00 a 22:00'},
    {numComision: 41255, dias:"Martes y Jueves", horario:'19:00 a 21:00'}
  ]
  res.render("home", {
    titulo: "Coder",
    mensaje: "Gente",
    isTutor: user.rol === "Tutor",
    user,
    cursos
  })
})

*/
/*
io.on("connection", (socket) => {
  console.log("Conexion con socket")

  socket.on('mensaje', info =>{ //Captura de info de cliente
    console.log(info)
  })

  socket.broadcast.emit('evento-admin', 'Hola desde server, sos el admin') //brodcast = se va a poder escuchar en mi app menos en el socket actual

  socket.emit('evento-general', "Hola a todo/as los/as usuarios/as")


})
*/
