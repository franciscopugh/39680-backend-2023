import { ManagerMongoDB } from "../../../db/mongoDBManager.js";
import { Schema } from "mongoose";

const userSchema = new Schema({
    first_name: {
        type: String,
        requered: true
    },
    last_name: {
        type: String,
        requered: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    age: {
        type: Number,
        requered: true
    },
    password: {
        type: String,
        requered: true
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