import userModel from "../models/UserModel.js";

export const findUsers = async () => {
    try {
        const users = await userModel.find()
        return users
    } catch (error) {
        return error
    }

}

export const findUserById = async (id) => {
    try {
        const user = await userModel.findById(id)
        return user
    } catch (error) {
        return error
    }

}

export const findUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email: email })
        return user
    } catch (error) {
        return error
    }

}

export const createUser = async (user) => {
    try {
        const newUser = new userModel(user)
        await newUser.save()
        return newUser
    } catch (error) {
        return error
    }

}