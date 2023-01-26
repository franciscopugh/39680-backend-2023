/*const fs  = require('fs')

const busqueda = async () => {
    if(fs.existsSync('./ejemplo.txt')) {
        let consulta = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
        let aux = JSON.parse(consulta)
        
        if(aux.some(producto => producto.id === idParametro)) {
            //Operaciones aqui si existe
        } else {
            console.log("PRODUCTO NO ENCONTRADO")
        }
    } else {
        console.log("Archivo no encontrado")
    }
    
}
const http = require('http')
//import * as http from 'http'
const PORT = 5000
const server = http.createServer((request, response) => {
    response.end("Hola, buenas dias!")
})

server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
*/

import express from 'express'
//const express = require('express')
const app = express()
const PORT = 4000

const productos = [
    {
        nombre: "Pepitas",
        id:1,
        categoria: "Snack"
    }, 
    {
        nombre: "Lentejitas",
        id:2,
        categoria: "Legumbre"
    },
    {
        nombre: "Mani",
        id:3,
        categoria: "Snack"
    }
]

app.use(express.urlencoded({extended: true})) //Permite busquedas de url complejas

app.get('/contacto', (req, res) => {
    res.send("Hola, esta es la pagina de contacto")
})

app.get('/producto/:id', async (req, res) => {
    console.log(productos.find(prod => prod.id === parseInt(req.params.id)))
    res.send("Hola, esta es la pagina de contacto")
})

app.get('/producto', (req, res) => {

    let {categoria}= req.query
    console.log(productos.filter(producto => producto.categoria === categoria))
    res.send("Producto route")
})

app.get('/', (req, res) => {
    res.send("Hola, esta es la pagina de inicio")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)    
})