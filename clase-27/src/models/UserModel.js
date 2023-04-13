import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = model("UserToys", userSchema)

export default userModel