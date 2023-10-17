const connection = require('./connection')

const addAgendamento = async (dados) => {
    const { } = dados
    const DataAtual = new Date(Date.now())

    const query = 'INSERT INTO agendamento(nome,senha,criadoEm,email,avatar) VALUES (?,?,?,?,?)'

    const [createdUser] = await connection.execute(query,[nome,senha,DataAtual,email,avatar])
    return {ID: createdUser.insertId}
}