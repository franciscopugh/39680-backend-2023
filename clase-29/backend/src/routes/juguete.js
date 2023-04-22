import { Router } from 'express'
import { getToys, postToys } from '../controllers/juguete.js'

const routerToys = Router()

routerToys.get('/', getToys)
routerToys.post("/", postToys)

export default routerToys