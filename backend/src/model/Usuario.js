const connection = require('./connection')

const getAllUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM usuarios')

    return users
}

const getUserById = async (id) => {
    const [user] = await connection.execute(`SELECT * FROM usuarios WHERE idUsuario = ${id}`)

    return user
}

const authUserLogin = async (userAuth) => {
    const {email, senha} = userAuth 
    const [user] = await connection.execute(`SELECT * FROM usuarios where email = '${email}' and senha = '${senha}' and status = 1`)
    
    if(user.length == 0){
        return {
            "status": "401",
            "msg": "Não foi possivel encontrar nenhum usuário com essa senha ou ativo."
        }
    }

    return user[0]
}

const addUser = async (user) => {
    const {nome,email,senha} = user

    const DataAtual = new Date(Date.now())

    const query = 'INSERT INTO usuarios(nome,senha,criadoEm,email) VALUES (?,?,?,?)'

    const [createdUser] = await connection.execute(query,[nome,senha,DataAtual,email])
    return {ID: createdUser.insertId}
}

const deleteUser = async (id) => {
    const query = 'DELETE FROM usuarios WHERE idUsuario = ?'
    const [deletedUser] = await connection.execute(query,[id])
    return deletedUser
}

const updatedUser = async (user, id) => {
    const {nome, senha, email, status} = user
    const query = 'UPDATE usuarios SET nome = ?, senha = ?, email = ?, status = ? WHERE idUsuario = ?'
    const [updatedUser] = await connection.execute(query, [nome,senha,email,status,id])
    return updatedUser
}


module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updatedUser,
    getUserById,
    authUserLogin,
}
