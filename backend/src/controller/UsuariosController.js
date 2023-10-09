const connection = require('../model/connection')
const userModel = require('../model/Usuario')

const getAllUsersController = async (_request, response) => {
    const users = await userModel.getAllUsers()
    return response.status(200).json(users)
}

const getUserByIdController = async (request, response) => {
    const { id } = request.params
    const user = await userModel.getUserById(id)
    return response.status(200).json(user)
}

const getUsersForSearchController = async (request, response) => {
    const users = await userModel.getUsersForSearch(request.body)
    return response.status(200).json(users)
}

const authUserLoginController = async (request, response) => {
    const auth = await userModel.authUserLogin(request.body)
    return response.status(200).json(auth)
}

const addUserController = async (request, response) => {
    const userCreate = await userModel.addUser(request.body)
    return response.status(201).json(userCreate)
}

const deleteUserController = async (request, response) => {
    const { id } = request.params
    await userModel.deleteUser(id)
    return response.status(204).json()
}

const updatedUserController = async (request, response) => {
    const { id } = request.params
    const updatedUser = await userModel.updatedUser(request.body,id)
    return response.status(205).json(updatedUser)
}

module.exports = {
    getAllUsersController,
    addUserController,
    deleteUserController,
    updatedUserController,
    getUserByIdController,
    authUserLoginController,
    getUsersForSearchController,
}