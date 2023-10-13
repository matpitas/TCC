const connection = require("./connection")

const addAmigo = async (friends) => {
    const { idCriador, idUsuario } = friends

    const DataAtual = new Date(Date.now())

    const sql = 'INSERT INTO amigos(IdCriador,IdDestino,CriadoEm) VALUES (?,?,?)'

    const [friend] = await connection.execute(sql, [idCriador, idUsuario, DataAtual])


    return friend
}

const verifyAmigos = async (friends) => {
    const { idCriador, idUsuario } = friends

    const [friend] = await connection.execute(`SELECT * FROM amigos WHERE (IdCriador = ${idCriador} AND IdDestino = ${idUsuario}) OR (IdDestino = ${idCriador} AND IdCriador = ${idUsuario})`)
    return friend
}

const listAmigos = async (idUser) => {
    const { id } = idUser
    const sql = "SELECT * FROM amigos WHERE (idCriador = ? OR idDestino = ?) and Status = 1"
    const [friend] = await connection.execute(sql, [id,id])
    return friend
}

const listRequest = async (idUser) => {
    const { id } = idUser
    const sql = "SELECT * FROM amigos WHERE idDestino = ? and Status = 0"
    const [friend] = await connection.execute(sql, [id])
    return friend
}

const AcceptRequest = async (idAmizade) => {
    const sql = "UPDATE amigos SET status = 1 WHERE idAmizade = ?"
    const [amizade] = await connection.execute(sql, [idAmizade])
    return amizade
}

module.exports = {
    addAmigo,
    verifyAmigos,
    listAmigos,
    listRequest,
    AcceptRequest,
}