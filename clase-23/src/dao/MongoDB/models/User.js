import { ManagerMongoDB } from "../db/mongoDBManager.js";
import { Schema } from "mongoose";

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

export class ManagerUserMongoDB extends ManagerMongoDB {
    constructor() {
        super(process.env.MONGODBURL, "users", userSchema)

    }

    async getElementByEmail(email) {
        super.setConnection()
        try {
            return await this.model.findOne({ email: email })
        } catch (error) {
            return error
        }
    }


}