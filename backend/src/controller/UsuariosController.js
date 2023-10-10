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
    const { id } = request.params
    const users = await userModel.getUsersForSearch(id, request.body)
    return response.status(200).json(users)
}

const authUserLoginController = async (request, response) => {
    const auth = await userModel.authUserLogin(request.body)
    return response.status(200).json(auth)
}

const addUserController = async (request, response) => {
    const { filename } = request.file
    let { avatar } = request.body
    const { nome,email,senha } = request.body
    avatar = filename
    const newUser = { nome, email, senha, avatar }
    const userCreate = await userModel.addUser(newUser)
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