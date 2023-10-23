const connection = require('./connection')

const addParticipante = async (dados) => {
    const { amigoId, agendamentoId } = dados

    const query = 'INSERT INTO participantes(idAgendamento, idUsuario) VALUES (?,?)'

    const [createParticipant] = await connection.execute(query,[agendamentoId, amigoId])
    return createParticipant
}

const getParticipantes = async (idCriador, body) => {
    const { idAgendament } = body
    const query = 'SELECT a.usuarioCriador, u.nome, u.avatar FROM participantes p, agendamentos a, usuarios u WHERE p.idAgendamento = a.idAgendamento and u.idUsuario = p.idUsuario and a.idAgendamento = ? and a.usuarioCriador = ?'

    const [createParticipant] = await connection.execute(query,[idAgendament, idCriador])
    return createParticipant
}

module.exports = {
    addParticipante,
    getParticipantes,
}