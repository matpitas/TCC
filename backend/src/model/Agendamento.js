const connection = require('./connection')

const addAgendamento = async (dados) => {
    const { horarioInicio, horarioTermino, jogos, idSession, } = dados
    const DataAtual = new Date(Date.now())

    const query = 'INSERT INTO agendamentos(usuarioCriador, iniciaEm, terminaEm, idJogo, criadoEm) VALUES (?,?,?,?,?)'

    const [createdAgendamento] = await connection.execute(query,[idSession, horarioInicio, horarioTermino, jogos, DataAtual])
    return {ID: createdAgendamento.insertId}
}

const getAgendamentoById = async (id) => {
    const query = 'SELECT * FROM agendamentos a, jogos j, participantes p WHERE a.idJogo = j.idJogo and p.`idAgendamento` = a.`idAgendamento` and p.status = 1 and (a.usuarioCriador = ?  or p.`idUsuario` = ?) and a.iniciaEm > NOW() GROUP BY a.idAgendamento ORDER BY a.iniciaEm ASC'

    const [createdAgendamento] = await connection.execute(query,[id, id])
    return createdAgendamento
}

const getNearAgendamentoById = async (id) => {
    const query = 'SELECT * FROM agendamentos a, jogos j, participantes p WHERE a.idJogo = j.idJogo and p.`idAgendamento` = a.`idAgendamento` and p.status = 1 and (a.usuarioCriador = ?  or p.`idUsuario` = ?) and a.status = 1 and a.iniciaEm > NOW()  ORDER BY `iniciaEm` asc LIMIT 1 '

    const [createdAgendamento] = await connection.execute(query,[id, id])
    return createdAgendamento
}

const getLastAgendamentoById = async (id) => {
    const query = 'SELECT j.nomeJogo, j.imagemJogo, a.idAgendamento, a.iniciaEm FROM agendamentos a, jogos j, participantes p WHERE a.idJogo = j.idJogo and p.`idAgendamento` = a.`idAgendamento` and p.status = 1 and (a.usuarioCriador = ?  or p.`idUsuario` = ?) and a.status = 2 and a.iniciaEm < NOW()  ORDER BY `iniciaEm` DESC LIMIT 1'

    const [createdAgendamento] = await connection.execute(query,[id,id])
    return createdAgendamento
}

const verifyStatusAgendamento = async (id) => {
    const query = 'SELECT * FROM agendamentos a, participantes p where a.`idAgendamento` = p.`idAgendamento` and a.`idAgendamento` = ? and p.status = 0'

    const [verifyAgendamento] = await connection.execute(query, [id])

    if(verifyAgendamento.length == 0){
        const updatingAgendamento = 'UPDATE agendamentos set status = 1 where idAgendamento = ?'
        const [updatedAgendamento] = await connection.execute(updatingAgendamento, [id])
        return updatedAgendamento
    }

    return verifyAgendamento
}

module.exports = {
    addAgendamento,
    getAgendamentoById,
    getNearAgendamentoById,
    getLastAgendamentoById,
    verifyStatusAgendamento,
}

// SELECT a.idAgendamento, u.idUsuario, u.nome FROM agendamentos a, usuarios u, participantes p WHERE a.idAgendamento = p.idAgendamento and u.idUsuario = p.idUsuario and a.usuarioCriador = ? 