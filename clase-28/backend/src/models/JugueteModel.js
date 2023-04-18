import { Schema, model } from 'mongoose'

const jugueteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

const jugueteModel = model("Juguete", jugueteSchema)

export default jugueteModel