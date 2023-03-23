import { ManagerMongoDB } from "../db/mongoDBManager.js";
import { Schema } from "mongoose";
import paginate from 'mongoose-paginate-v2'

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        index: true
    },
    status: {
        type: Boolean,
        default: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    thumbnails: []
})

productSchema.plugin(paginate)

export class ManagerProductMongoDB extends ManagerMongoDB {
    constructor() {
        super(process.env.MONGODBURL, "products", productSchema)
    }

    async getProducts(limit, page, filter, ord) {
        super.setConnection()

        const productos = await this.model.paginate({ filter: filter }, { limit: limit, page: page, sort: { price: ord } })

        return productos
    }
}