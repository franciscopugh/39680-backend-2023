import { Schema, model } from "mongoose";

const userCollection = "users"

const userSchema = Schema({
    nombre: {
        type: String,
        index: true
    },
    apellido: {
        type: String,
        index: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        index: true
    },
})

const userModel = model(userCollection, userSchema)

export default userModel