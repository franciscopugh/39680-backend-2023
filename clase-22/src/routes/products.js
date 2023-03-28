import { Router } from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'

const routerProducto = Router()

routerProducto.get("/", getProducts)
routerProducto.get("/:id", getProduct)
routerProducto.post("/", createProduct)
routerProducto.put("/:id", updateProduct)
routerProducto.delete("/:id", deleteProduct)


export default routerProducto