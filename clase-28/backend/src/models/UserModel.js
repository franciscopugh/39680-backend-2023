import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    age: {
        type: Number,
        required: true
    },
    rol: {
        type: String,
        default: "User"
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = model("UserToys", userSchema)

export default userModel