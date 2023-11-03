const connection = require('./connection')

const addParticipante = async (dados) => {
    const { amigoId, agendamentoId } = dados

    const query = 'INSERT INTO participantes(idAgendamento, idUsuario) VALUES (?,?)'

    const [createParticipant] = await connection.execute(query,[agendamentoId, amigoId])
    return createParticipant
}

const getParticipantes = async (body) => {
    const { idAgendamento } = body
    const query = 'SELECT a.usuarioCriador, u.nome, u.avatar FROM participantes p, agendamentos a, usuarios u WHERE p.idAgendamento = a.idAgendamento and u.idUsuario = p.idUsuario and a.idAgendamento = ? and p.status = 1 '

    const [createParticipant] = await connection.execute(query,[idAgendamento])
    return createParticipant
}

const getSchedulingByParticipants = async (id) => {
    const query = "select p.*, a.usuarioCriador, j.nomeJogo, u.nome, a.iniciaEm from participantes p, agendamentos a, jogos j, usuarios u where p.idAgendamento = a.idAgendamento and j.idJogo = a.idJogo and a.usuarioCriador = u.idUsuario and p.idUsuario = ?"
    const [searchScheduling] = await connection.execute(query,[id])
    return searchScheduling
}

const getPendingSchedulingByParticipants = async (id) => {
    const query = "select p.*, a.usuarioCriador, j.nomeJogo, u.nome, a.iniciaEm from participantes p, agendamentos a, jogos j, usuarios u where p.idAgendamento = a.idAgendamento and j.idJogo = a.idJogo and a.usuarioCriador = u.idUsuario and p.idUsuario = ? and p.status = 0"
    const [searchScheduling] = await connection.execute(query,[id])
    return searchScheduling
}

const putPendingScheduling = async (idParticipante, body) => {
    const { status } = body
    const query = "update participantes set status = ? where idParticipante = ?"
    const [updateParticipante] = await connection.execute(query, [status, idParticipante])
    return updateParticipante
}

module.exports = {
    addParticipante,
    getParticipantes,
    getSchedulingByParticipants,
    getPendingSchedulingByParticipants,
    putPendingScheduling,
}