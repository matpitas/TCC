const connection = require('./connection')

const addParticipante = async (dados) => {
    const { amigoId, agendamentoId } = dados

    const query = 'INSERT INTO participantes(idAgendamento, idUsuario) VALUES (?,?)'

    const [createParticipant] = await connection.execute(query,[agendamentoId, amigoId])
    return createParticipant
}

const getParticipantes = async (body) => {
    const { idAgendamento } = body
    const query = 'SELECT a.usuarioCriador, u.nome, u.avatar FROM participantes p, agendamentos a, usuarios u WHERE p.idAgendamento = a.idAgendamento and u.idUsuario = p.idUsuario and a.idAgendamento = ? '

    const [createParticipant] = await connection.execute(query,[idAgendamento])
    return createParticipant
}

const getSchedulingByParticipants = async (id) => {
    const query = "select p.*, a.usuarioCriador, j.nomeJogo, u.nome from participantes p, agendamentos a, jogos j, usuarios u where p.idAgendamento = a.idAgendamento and j.idJogo = a.idJogo and a.usuarioCriador = u.idUsuario and p.idUsuario = ?"
    const [searchScheduling] = await connection.execute(query,[id])
    return searchScheduling
}

const gePendingSchedulingByParticipants = async (id) => {
    const query = "select * from participantes where idUsuario = ? and status = 0"
    const [searchScheduling] = await connection.execute(query,[id])
    return searchScheduling
}

module.exports = {
    addParticipante,
    getParticipantes,
    getSchedulingByParticipants,
    gePendingSchedulingByParticipants,
}