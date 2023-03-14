import mongoose from "mongoose";
import orderModel from "./models/order.js";

const start = async () => {
    await mongoose.connect("mongodb+srv://franciscopugh01:coderhouse@cluster0.xfhtyhn.mongodb.net/?retryWrites=true&w=majority")

    const resultados = await orderModel.paginate({ size: "medium" }, { limit: 1, page: 2 })
    //limit = cantidad de documentos por pagina
    //page = pagina actual de consulta
    console.log(resultados)
    /*const resultados = await orderModel.aggregate([
        {
            $match: { size: "medium" }
        },
        {
            $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } }
        },
        {
            $sort: { totalPrice: -1 } //1 menor-mayor, -1 de mayor a menor
        },
        {
            $group: { _id: 1, orders: { $push: "$$ROOT" } }
        },
        {
            $project: {
                "_id": 0,
                orders: "$orders"
            }
        },
        {
            $merge: {
                into: "reports"
            }
        }

    ])
    console.log(resultados)
    /*await orderModel.insertMany([
        { name: "Muzzarela", size: "small", price: 1500, quantity: 5 },
        { name: "Fugaza", size: "medium", price: 1800, quantity: 10 },
        { name: "Napolitana", size: "large", price: 2400, quantity: 6 },
        { name: "Muzzarela", size: "medium", price: 1700, quantity: 4 },
        { name: "Especial", size: "small", price: 1600, quantity: 8 },
        { name: "Rellena", size: "large", price: 2700, quantity: 2 },
        { name: "Napolitana", size: "small", price: 1550, quantity: 1 },
        { name: "Roquefort", size: "medium", price: 1800, quantity: 6 },
        { name: "Calabresa", size: "large", price: 2600, quantity: 2 },
        { name: "Vegetariana", size: "small", price: 1450, quantity: 3 },
        { name: "Jamon y rucula", size: "medium", price: 1750, quantity: 2 },
        { name: "Calabresa", size: "large", price: 1550, quantity: 2 }

    ])*/


}

start()