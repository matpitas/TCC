
const bcrypt = require('bcrypt')

// Criptografia de senha
const encryptPassword = async (password) => {
    const securityLevel = 10
    const increasingSecurity = await bcrypt.genSalt(securityLevel)
    const cryptoPassword = await bcrypt.hash(password, increasingSecurity)
    return cryptoPassword
}

// Verificando a criptografia de senha
const verifyCripto = async (password, cryptoPassword) => {
    const verified = await bcrypt.compare(password, cryptoPassword)
    return verified
}

module.exports = {
    encryptPassword,
    verifyCripto,
}