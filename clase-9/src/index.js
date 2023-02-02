import express from "express";
import routerProd from './routes/product.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)
const app = express()
const PORT = 4000 

//Middlewares
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

//Routes
app.use('/static', express.static(__dirname + '/public'))
app.use('/api/product', routerProd)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})