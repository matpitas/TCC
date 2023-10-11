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

    const [friend] = await connection.execute(`SELECT * FROM amigos WHERE IdCriador = ${idCriador} AND IdDestino = ${idUsuario}`)
    return friend
}

module.exports = {
    addAmigo,
    verifyAmigos
}