const connection = require("./connection")

const addjogo = async (jogos) => {
    const { nomeJogo, imagemJogo } = jogos
    console.log(jogos)

    const sql = 'INSERT INTO jogos(nomeJogo, imagemJogo) VALUES (?,?)'

    const [jogo] = await connection.execute(sql, [nomeJogo, imagemJogo])


    return jogo
}

const getAlljogos = async () => {
    const [jogo] = await connection.execute('SELECT * FROM jogos')
    return jogo
}



module.exports = {
    addjogo,
    getAlljogos,
}