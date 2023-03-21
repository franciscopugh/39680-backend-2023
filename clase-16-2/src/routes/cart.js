import { Router } from "express";
import { createCarrito, getProductsCart, addProductCart } from '../controllers/cart.controller.js'

const routerCart = Router()

routerCart.get("/:id", getProductsCart)
routerCart.post("/:id", addProductCart)
routerCart.post("/", createCarrito)

export default routerCart