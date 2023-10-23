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

const getNearAgendamentoById = async (request, response) => {
    const { id } = request.params
    const agendamento = await AgendamentoModel.getNearAgendamentoById(id)
    return response.status(200).json(agendamento)
}


module.exports = {
    addAgendamentoController,
    getAgendamentoByIdController,
    getNearAgendamentoById,
}