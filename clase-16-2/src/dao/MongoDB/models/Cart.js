import { ManagerMongoDB } from "../../../db/mongoDBManager.js";
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                id_prod: {
                    type: mongoose.Types.ObjectId,
                    ref: "products",
                },
                cant: Number
            }

        ],
        default: []
    }
})

export class ManagerCartMongoDB extends ManagerMongoDB {
    constructor() {
        super(process.env.MONGODBURL, "cart", cartSchema)

    }

    async addProductCart(id, idProd, cant) {
        super.setConnection()
        let carrito = await this.model.findById(id)
        let prodId = new mongoose.Types.ObjectId(idProd)
        carrito.products.push({ prodId, cant })
        const respuesta = await this.model.findByIdAndUpdate(id, carrito)
        return respuesta
    }

    async getProductsCart() {
        super.setConnection()
        const prods = await this.model.find().populate({
            path: "products.id_prod"
        })
        return prods
    }

    async deleteProductCart(id) {
        super.setConnection()
        const respuesta = await this.model.products.findByIdAndDelete(id)
        return respuesta
    }

    async updateProductCart(id, cart) {
        super.setConnection()
        await this.model
    }

    async deleteProductCart(id) {
        super.setConnection()
        await this.model.products.findByIdAndDelete(id)
    }
}