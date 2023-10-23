const ParticipantesModel = require('../model/Participantes')

const addParticipantesController = async (request, response) => {
    const participantes = await ParticipantesModel.addParticipante(request.body)
    return response.status(200).json(participantes)
}

const getParticipantesController = async (request, response) => {
    const { id } = request.params
    const participantes = await ParticipantesModel.getParticipantes(id, request.body)
    return response.status(200).json(participantes)
}

module.exports = {
    addParticipantesController,
    getParticipantesController,
}