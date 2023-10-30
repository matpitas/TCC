const ParticipantesModel = require('../model/Participantes')

const addParticipantesController = async (request, response) => {
    const participantes = await ParticipantesModel.addParticipante(request.body)
    return response.status(200).json(participantes)
}

const getParticipantesController = async (request, response) => {
    const participantes = await ParticipantesModel.getParticipantes(request.body)
    return response.status(200).json(participantes)
}

const getSchedulingByParticipantsController = async (request, response) => {
    const { id } = request.params
    const participantes = await ParticipantesModel.getSchedulingByParticipants(id)
    return response.status(200).json(participantes)
}

const getPendingSchedulingByParticipantsController = async (request, response) => {
    const { id } = request.params
    const participantes = await ParticipantesModel.getPendingSchedulingByParticipants(id)
    return response.status(200).json(participantes)
}

const putPendingSchedulingController = async (request, response) => {
    const { id } = request.params
    const participantes = await ParticipantesModel.putPendingScheduling(id, request.body)
    return response.status(200).json(participantes)
}

module.exports = {
    addParticipantesController,
    getParticipantesController,
    getSchedulingByParticipantsController,
    getPendingSchedulingByParticipantsController,
    putPendingSchedulingController
}