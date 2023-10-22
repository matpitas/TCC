const JogosModel = require("../model/Jogos")

const addJogoController = async (request, response) => {
    const { filename } = request.file
    let { imagemJogo } = request.body
    const { nomeJogo } = request.body
    imagemJogo = filename
    const newGame = { nomeJogo, imagemJogo }
    const jogos = await JogosModel.addjogo(newGame)
    return response.status(200).json(jogos)
}

const getAllJogosController = async (request, response) => {
    const jogos = await JogosModel.getAlljogos()
    return response.status(200).json(jogos)
}

module.exports = {
    addJogoController,
    getAllJogosController,
}