const AgendamentoModel = require('../model/Agendamento')

const addAgendamentoController = async (request, response) => {
    const agendamento = await AgendamentoModel.addAgendamento(request.body)
    return response.status(200).json(agendamento)
}

const getAgendamentoByIdController = async (request, response) => {
    const { id } = request.params
    const agendamento = await AgendamentoModel.getAgendamentoById(id)
    return response.status(200).json(agendamento)
}

const getNearAgendamentoByIdController = async (request, response) => {
    const { id } = request.params
    const agendamento = await AgendamentoModel.getNearAgendamentoById(id)
    return response.status(200).json(agendamento)
}

const getLastAgendamentoByIdController = async (request, response) => {
    const { id } = request.params
    const agendamento = await AgendamentoModel.getLastAgendamentoById(id)
    return response.status(200).json(agendamento)
}

const verifyStatusAgendamentoController = async (request, response) => {
    const { id } = request.params
    const agendamento = await AgendamentoModel.verifyStatusAgendamento(id)
    return response.status(200).json(agendamento)
}


module.exports = {
    addAgendamentoController,
    getAgendamentoByIdController,
    getNearAgendamentoByIdController,
    getLastAgendamentoByIdController,
    verifyStatusAgendamentoController,
}