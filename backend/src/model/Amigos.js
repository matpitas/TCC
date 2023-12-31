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
    const sql = "SELECT if(a.idCriador=?, u.email, x.email) email, if(a.idCriador=?, u.idUsuario, x.idUsuario) idAmigo,if(a.idCriador=?, u.nome, x.nome) as nome, if(a.idCriador=?, u.avatar, x.avatar) as avatar FROM amigos a LEFT JOIN usuarios u ON u.idUsuario = a.idDestino LEFT JOIN usuarios x ON x.idUsuario = a.idCriador WHERE a.status = 1 AND (a.idCriador = ? OR a.idDestino = ?);"
    const [friend] = await connection.execute(sql, [id,id,id,id,id,id])
    return friend
}

const listRequest = async (idUser) => {
    const { id } = idUser
    const sql = "SELECT * FROM amigos WHERE idDestino = ? and Status = 0"
    const [friend] = await connection.execute(sql, [id])
    return friend
}

const AcceptRequest = async (body, idAmizade) => {
    const { status } = body
    
    if(status == 2){
        const sql = "DELETE FROM amigos WHERE idAmizade = ?"
        const [deletion] = await connection.execute(sql, [idAmizade])
        return deletion
    }
    const sql = "UPDATE amigos SET status = ? WHERE idAmizade = ?"
    const [amizade] = await connection.execute(sql, [status,idAmizade])
    return amizade
}

module.exports = {
    addAmigo,
    verifyAmigos,
    listAmigos,
    listRequest,
    AcceptRequest,
}