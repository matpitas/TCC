const app = require("./app")

require("dotenv").config()

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {`Servidor esta rodando na porta ${PORT}`})