const connection = require('./connection')

const addAgendamento = async (dados) => {
    const { horarioInicio, horarioTermino, jogos, idSession, } = dados
    const DataAtual = new Date(Date.now())

    const query = 'INSERT INTO agendamentos(usuarioCriador, iniciaEm, terminaEm, idJogo, criadoEm) VALUES (?,?,?,?,?)'

    const [createdAgendamento] = await connection.execute(query,[idSession, horarioInicio, horarioTermino, jogos, DataAtual])
    return {ID: createdAgendamento.insertId}
}

const getAgendamentoById = async (id) => {
    const query = 'SELECT * FROM agendamentos a, jogos j WHERE a.idJogo = j.idJogo and a.usuarioCriador = ? '

    const [createdAgendamento] = await connection.execute(query,[id])
    return createdAgendamento
}

const getNearAgendamentoById = async (id) => {
    const query = 'SELECT * FROM agendamentos a, jogos j WHERE a.idJogo = j.idJogo and a.usuarioCriador = ? and a.status = 1 and a.iniciaEm > NOW()  ORDER BY `iniciaEm` asc LIMIT 1 '

    const [createdAgendamento] = await connection.execute(query,[id])
    return createdAgendamento
}

const getLastAgendamentoById = async (id) => {
    const query = 'SELECT j.nomeJogo, j.imagemJogo, a.idAgendamento, a.iniciaEm FROM agendamentos a, jogos j WHERE a.idJogo = j.idJogo and a.usuarioCriador = ? and a.status = 1 and a.iniciaEm < NOW()  ORDER BY `iniciaEm` DESC LIMIT 1'

    const [createdAgendamento] = await connection.execute(query,[id])
    return createdAgendamento
}

module.exports = {
    addAgendamento,
    getAgendamentoById,
    getNearAgendamentoById,
    getLastAgendamentoById,
}

// SELECT a.idAgendamento, u.idUsuario, u.nome FROM agendamentos a, usuarios u, participantes p WHERE a.idAgendamento = p.idAgendamento and u.idUsuario = p.idUsuario and a.usuarioCriador = ? 