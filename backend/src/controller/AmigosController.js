const amigosModel = require('../model/Amigos')

const addAmigoController = async (request, response) => {
    const friends = await amigosModel.addAmigo(request.body)
    return response.status(200).json(friends)
}

const verifyAmigosController = async (request, response) => {
    const friends = await amigosModel.verifyAmigos(request.body)
    return response.status(200).json(friends)
}

const listAmigosController = async (request, response) => {
    const friends = await amigosModel.listAmigos(request.body)
    return response.status(200).json(friends)
}

const listRequestController = async (request, response) => {
    const friends = await amigosModel.listRequest(request.body)
    return response.status(200).json(friends)
}

module.exports = {
    addAmigoController,
    verifyAmigosController,
    listAmigosController,
    listRequestController,
}